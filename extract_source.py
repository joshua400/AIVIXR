
import os

filepath = r"C:\Users\Joshua Ragiland\Downloads\calisto.framer.website-framer-full-20260213160013\index.html"
keywords = ["Starter", "Pro", "Enterprise", "Step 1", "Step 2", "Step 3", "Latest News", "Insights"]

if not os.path.exists(filepath):
    print(f"File not found: {filepath}")
    exit(1)

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()


keywords = ["Latest News", "Insights", "AI", "Automation", "Future", "How to"]
targets = [content.find("Blog"), content.find("Latest News")]

with open(r"c:\avixr-main\extraction_results_full.txt", 'w', encoding='utf-8') as out:
    for kw in keywords:
        out.write(f"\n--- Matches for: {kw} ---\n")
        pos = 0
        while True:
            pos = content.find(kw, pos)
            if pos == -1: break
            start = max(0, pos - 200)
            end = min(len(content), pos + 1000)
            snippet = content[start:end].replace('\n', ' ')
            out.write(f"Position {pos}: ...{snippet}...\n")
            pos += 1
            if pos > content.find(kw, pos-1) + 5000: break

    # Also look for <h3> specifically for blog
    import re
    h3_matches = re.findall(r'<h3[^>]*>(.*?)</h3>', content)
    out.write("\n--- All H3 Tags (Potential Titles) ---\n")
    for h3 in h3_matches:
        out.write(f"- {h3}\n")
