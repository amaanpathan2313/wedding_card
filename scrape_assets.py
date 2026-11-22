import urllib.request
import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all css and js chunks
css_matches = list(set(re.findall(r'href="(/_next/static/[^"]+\.css[^"]*)"', html)))
js_matches = list(set(re.findall(r'src="(/_next/static/[^"]+\.js[^"]*)"', html)))

# Also find scripts inside self.__next_f.push
f_js = list(set(re.findall(r'/_next/static/chunks/[a-zA-Z0-9_\-\.]+\.js', html)))
for item in f_js:
    if item not in js_matches:
        js_matches.append(item)

print(f"CSS files: {len(css_matches)}")
print(f"JS files: {len(js_matches)}")

os.makedirs('downloaded/css', exist_ok=True)
os.makedirs('downloaded/js', exist_ok=True)

base_url = 'https://saveourdate.in'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for c in css_matches:
    url = base_url + c
    fname = os.path.basename(c.split('?')[0])
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(f'downloaded/css/{fname}', 'wb') as out:
            out.write(resp.read())
    except Exception as e:
        print(f"Error fetching {url}: {e}")

for j in js_matches:
    url = base_url + j
    fname = os.path.basename(j.split('?')[0])
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(f'downloaded/js/{fname}', 'wb') as out:
            out.write(resp.read())
    except Exception as e:
        print(f"Error fetching {url}: {e}")

print("Downloaded assets done!")
