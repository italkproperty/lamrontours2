#!/usr/bin/env python3
import json
import os
from pathlib import Path

IMPORT_DIR = Path("/workspaces/lamrontours2/data/imports")
OUT_DIR = Path("/workspaces/lamrontours2/data/parsed")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# Excel
excel_file = IMPORT_DIR / "LTS PLAN.xlsx"
# Word
docx_file = IMPORT_DIR / "Packages  2.docx"

results = {}

if excel_file.exists():
    try:
        import pandas as pd
        xls = pd.ExcelFile(excel_file)
        sheets = {}
        for sheet in xls.sheet_names:
            df = xls.parse(sheet)
            # Convert NaN to None for JSON
            data = df.where(pd.notnull(df), None).to_dict(orient="records")
            sheets[sheet] = data
            # also write CSV per sheet
            csv_path = OUT_DIR / f"{excel_file.stem}.{sheet}.csv"
            df.to_csv(csv_path, index=False)
        json_path = OUT_DIR / f"{excel_file.stem}.json"
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(sheets, f, ensure_ascii=False, indent=2)
        results['excel'] = str(json_path)
    except Exception as e:
        results['excel_error'] = str(e)
else:
    results['excel_error'] = f"{excel_file} not found"

if docx_file.exists():
    try:
        from docx import Document
        doc = Document(docx_file)
        paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
        # naive chunking: split when paragraph looks like a title (all caps or ends with ':')
        packages = []
        current = {"title": None, "content": []}
        for p in paras:
            if p.isupper() or p.endswith(":") or (len(p.split())<=6 and p.endswith("." )==False and p[0].isupper() and any(ch.islower() for ch in p)):
                # treat as title if it's SHORT and capitalized - heuristic
                if current['title'] or current['content']:
                    packages.append(current)
                current = {"title": p, "content": []}
            else:
                if current['title'] is None and len(packages)==0:
                    # preface content
                    current['content'].append(p)
                else:
                    current['content'].append(p)
        # append last
        if current['title'] or current['content']:
            packages.append(current)
        docjson = OUT_DIR / f"{docx_file.stem}.json"
        with open(docjson, "w", encoding="utf-8") as f:
            json.dump(packages, f, ensure_ascii=False, indent=2)
        results['docx'] = str(docjson)
    except Exception as e:
        results['docx_error'] = str(e)
else:
    results['docx_error'] = f"{docx_file} not found"

out = OUT_DIR / "parse_results.json"
with open(out, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print(json.dumps(results, ensure_ascii=False, indent=2))
