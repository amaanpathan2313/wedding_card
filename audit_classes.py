import re

with open('extracted_zaytoon_pretty.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

with open('zaytoon_extracted_full.css', 'r', encoding='utf-8') as f:
    css_code = f.read()

classes = set()
for m in re.finditer(r'className:\s*["`\']([^"`\']+)["`\']', js_code):
    raw = m.group(1)
    cleaned = re.sub(r'\$\{[^}]*\}', ' ', raw)
    for c in cleaned.split():
        c = c.strip()
        if c and not c.startswith('lucide'):
            classes.add(c)

print(f"Total unique classes in JS: {len(classes)}")

missing = []
for c in sorted(classes):
    if c not in css_code:
        missing.append(c)

print(f"Missing in zaytoon_extracted_full.css ({len(missing)}):")
for m in missing:
    print(" -", m)
