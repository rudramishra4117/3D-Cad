import os, re
cmd_keys = set()
for root, dirs, files in os.walk('packages/app/src/commands'):
    for f in files:
        if f.endswith('.ts'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = re.findall(r'key:\s*[\"\'\`]([a-zA-Z0-9._-]+)[\"\'\`]', content)
                for m in matches:
                    cmd_keys.add(m)

with open('packages/builder/src/ribbon.ts', 'r', encoding='utf-8') as f:
    ribbon_content = f.read()

missing = []
for k in cmd_keys:
    if f'"{k}"' not in ribbon_content and f"'{k}'" not in ribbon_content:
        missing.append(k)

print('Missing in ribbon:')
for m in sorted(missing):
    if not m.startswith('doc.') and not m.startswith('app.'): # doc/app are system commands not necessarily on ribbon
        print(m)
