import os
import re

root_dir = "."
exclude_dirs = {".git", "node_modules", "dist", ".rspack", "public", "assets"}
exclude_exts = {".png", ".jpg", ".jpeg", ".gif", ".ico", ".woff", ".woff2", ".ttf", ".eot"}

replacements = [
    ("NIELIT AeroCAD", "NIELIT Drone CAD"),
    ("AeroCAD", "DroneCAD"),
    ("aerocad", "dronecad"),
    ("AEROCAD", "DRONECAD")
]

modified_files = []

for root, dirs, files in os.walk(root_dir):
    # Modify dirs in-place to exclude unwanted directories
    dirs[:] = [d for d in dirs if d not in exclude_dirs]
    
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in exclude_exts or file == "replace.py":
            continue
            
        filepath = os.path.join(root, file)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = content
            for old, new in replacements:
                new_content = new_content.replace(old, new)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                modified_files.append(filepath)
                print(f"Updated: {filepath}")
        except Exception as e:
            # Skip files that can't be read as utf-8 (e.g. binary)
            pass

print(f"Total files updated: {len(modified_files)}")
