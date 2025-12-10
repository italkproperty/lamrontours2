#!/usr/bin/env python3
import json
from pathlib import Path
import re

ROOT = Path('/workspaces/lamrontours2')
PARSED_DOC = ROOT / 'data' / 'parsed' / 'Packages  2.json'
TOURS_JSON = ROOT / 'data' / 'tours.json'

if not PARSED_DOC.exists():
    print('Parsed doc not found:', PARSED_DOC)
    raise SystemExit(1)

with open(PARSED_DOC,'r',encoding='utf-8') as f:
    blocks = json.load(f)

# load existing tours
with open(TOURS_JSON,'r',encoding='utf-8') as f:
    tours = json.load(f)

# helper slug
import unicodedata

def slugify(s):
    s = s.lower()
    s = unicodedata.normalize('NFKD', s)
    s = re.sub(r"[^a-z0-9]+", '-', s)
    s = re.sub(r'-+', '-', s).strip('-')
    return s

# extract packages: look for blocks where title is a known package title
# Heuristic: package titles are those which are not null and not short headings like 'Duration:' etc.
packages = []
current = None
for b in blocks:
    title = b.get('title')
    content = b.get('content', [])
    # treat titles that look like package names: words and spaces, not 'Duration:' etc.
    if title and not title.lower().startswith(('duration','accommodation','activities','transport','estimated','estimated package','estimated package cost','estimated package total','estimated package cost:')):
        # if this title appears as a package name (contains words and not just a single word like 'Accommodation:')
        # start new package
        if current:
            packages.append(current)
        current = {'name': title, 'sections': []}
        if content:
            current['sections'].append({'heading': None, 'lines': content})
    else:
        if current:
            # append content to last section
            if title and (title.endswith(':') or title.lower().startswith('accommodation') or title.lower().startswith('activities') or title.lower().startswith('transport') or title.lower().startswith('duration') or title.lower().startswith('estimated')):
                # start a new named section
                current['sections'].append({'heading': title.rstrip(':'), 'lines': content})
            else:
                # append lines
                if content:
                    current['sections'][-1]['lines'].extend(content)

# append last
if current:
    packages.append(current)

# Now map packages to tour objects
existing_slugs = {t['slug'] for t in tours}
next_id = max([t['id'] for t in tours])+1 if tours else 1
new_tours = []
for pkg in packages:
    name = pkg['name']
    slug = slugify(name)
    # avoid duplicates
    if slug in existing_slugs:
        # skip or modify
        slug = f"{slug}-{next_id}"
    # defaults
    location = ''
    duration = ''
    price = None
    description = ''
    highlights = []
    itinerary = []
    image = ''
    # parse sections
    for sec in pkg['sections']:
        h = (sec.get('heading') or '').lower() if sec.get('heading') else ''
        lines = sec.get('lines', [])
        if not h:
            # initial content - may include single-line titles etc.
            # try to find Duration or cost in lines
            for line in lines:
                if 'duration' in line.lower():
                    duration = line.split(':',1)[-1].strip()
                m = re.search(r'N\$\s*([0-9,]+)', line)
                if m:
                    price = int(m.group(1).replace(',',''))
                # accumulate description
                description += (line + ' ')
        elif 'duration' in h:
            # lines like '4 Days / 3 Nights'
            if lines:
                duration = lines[0]
        elif 'accommodation' in h:
            if lines:
                description += 'Accommodation: ' + '; '.join(lines) + ' '
        elif 'activities' in h:
            for l in lines:
                highlights.append(l)
        elif 'transport' in h:
            description += 'Transport: ' + '; '.join(lines) + ' '
        elif 'estimated' in h:
            # price
            for l in lines:
                m = re.search(r'N\$\s*([0-9,]+)', l)
                if m:
                    price = int(m.group(1).replace(',',''))
    # build simple itinerary from highlights first 3 as days
    if duration:
        # try to extract number of days
        m = re.search(r'(\d+)\s*day', duration.lower())
        days = int(m.group(1)) if m else None
    else:
        days = None
    if days and highlights:
        for i in range(1, min(days, len(highlights))+1):
            itinerary.append({'day': i, 'title': highlights[i-1] if i-1 < len(highlights) else f'Day {i}', 'description': highlights[i-1] if i-1 < len(highlights) else ''})
    # fallback price
    if price is None:
        # try to find price in description
        m = re.search(r'N\$\s*([0-9,]+)', description)
        if m:
            price = int(m.group(1).replace(',',''))
    tour = {
        'id': next_id,
        'slug': slug,
        'name': name,
        'location': location or 'Namibia',
        'price': price or 0,
        'rating': 4.5,
        'reviews': 0,
        'duration': duration or '',
        'image': image or '',
        'description': description.strip(),
        'itinerary': itinerary,
        'highlights': highlights
    }
    tours.append(tour)
    new_tours.append(tour)
    existing_slugs.add(slug)
    next_id += 1

# write updated tours.json to a new file
with open(TOURS_JSON,'w',encoding='utf-8') as f:
    json.dump(tours,f,ensure_ascii=False,indent=2)

print(f'Added {len(new_tours)} tours.')
print([t['slug'] for t in new_tours])
