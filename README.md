# Joseph Berlucchi — Resume Site

A static personal resume site. Three files, no build step.

## Files

- `index.html` — the page itself
- `resume-data.jsx` — your content (edit this to update text)
- `obsidian.jsx` — the layout/component

## Local preview

Just open `index.html` in a browser. Or run a tiny local server:

```bash
cd site
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages

1. **Create a new repo** on GitHub. Easiest options:
   - Name it `joeberlucchi.github.io` → site lives at `https://joeberlucchi.github.io`
   - Name it anything else (e.g. `resume`) → site lives at `https://joeberlucchi.github.io/resume`

2. **Push these files** to the repo root:
   ```bash
   cd site
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/joeberlucchi/<repo-name>.git
   git push -u origin main
   ```

3. **Enable Pages** in the repo:
   - Settings → Pages
   - Source: **Deploy from a branch**
   - Branch: **main**, Folder: **/ (root)**
   - Save. First build takes ~1 minute.

4. **(Optional) Custom domain** like `joeberlucchi.com`:
   - Buy at Cloudflare / Porkbun / Namecheap (~$10–15/yr)
   - In repo Settings → Pages → Custom domain, enter your domain
   - Add a `CNAME` DNS record pointing to `joeberlucchi.github.io`
   - Wait ~10 min, enable “Enforce HTTPS”

## Editing content

Open `resume-data.jsx`. Everything is plain JS — change the strings, push, done.

## Notes

- The page uses Babel-in-the-browser to keep the source readable. It's a personal site, not a SaaS — totally fine. If you ever want a build step, swap to Vite later.
- All fonts come from Google Fonts via CDN.
- No tracking, no backend.
