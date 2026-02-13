
import os

filepath = r"C:\Users\Joshua Ragiland\Downloads\saveweb2zip-com-calisto-framer-website\index.html"
keywords = ["Starter", "Pro", "Enterprise", "Step 1", "Step 2", "Step 3", "Discovery", "Development", "Deployment", "Analysis", "Design"]

if not os.path.exists(filepath):
    print(f"File not found: {filepath}")
    exit(1)

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()


keywords = ["Latest News", "Insights", "AI", "Automation", "Future", "How to"]
targets = [content.find("Blog"), content.find("Latest News")]

with open(r"c:\avixr-main\extraction_results.txt", 'w', encoding='utf-8') as out:
    # Look for <h3> within 20000 chars of any "Blog" mention
    blog_pos = content.find("Blog")
    if blog_pos != -1:
        chunk = content[blog_pos:blog_pos+40000]
        import re
        titles = re.findall(r'<h[23][^>]*>(.*?)</h[23]>', chunk)
        out.write(f"\n--- Titles found near Blog (pos {blog_pos}) ---\n")
        for t in titles:
            out.write(f"- {t}\n")
