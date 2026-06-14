# Sheikh Saqib — Portfolio

Personal portfolio website for [Sheikh Saqib](https://github.com/sheikh-saqib), Software Engineer specializing in distributed systems and event-driven architecture.

**Live site:** After deployment, your site will be available at one of the URLs below (100% free via GitHub Pages).

---

## Deploy for Free on GitHub Pages

### Option A — User site (recommended)

Your site will live at **`https://sheikh-saqib.github.io`**

1. Create a new repository on GitHub named **`sheikh-saqib.github.io`** (must match your username exactly).
2. Push this folder to that repo:

```bash
cd C:\Users\sheik\portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/sheikh-saqib/sheikh-saqib.github.io.git
git push -u origin main
```

3. Go to **Settings → Pages** in the repo.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **`main`**, folder **`/ (root)`**, and click **Save**.
6. Wait 1–2 minutes. Your site will be live at `https://sheikh-saqib.github.io`.

---

### Option B — Project site

Your site will live at **`https://sheikh-saqib.github.io/portfolio`**

1. Create a repo named **`portfolio`** (or any name you prefer).
2. Push the code:

```bash
cd C:\Users\sheik\portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/sheikh-saqib/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages: **Settings → Pages → Source: main branch, / (root)**.
4. Site URL: `https://sheikh-saqib.github.io/portfolio`

---

## Preview Locally

Open `index.html` in your browser, or run a simple server:

```bash
# Python
python -m http.server 8080

# Node.js (if installed)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Custom Domain (optional, still free)

If you own a domain (e.g. `sheikhsaqibportfolio.com`):

1. Add a `CNAME` file to this repo containing your domain name.
2. In your domain registrar, add DNS records pointing to GitHub Pages:
   - **A records** → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or **CNAME** → `sheikh-saqib.github.io`
3. Enable the custom domain in **Settings → Pages**.

---

## File Structure

```
portfolio/
├── index.html      # Main page
├── styles.css      # Styles
├── script.js       # Interactions & animations
└── README.md       # This file
```

---

## Cost

| Service        | Cost   |
|----------------|--------|
| GitHub Pages   | Free   |
| Custom domain  | ~£10/yr (optional) |
| SSL/HTTPS      | Free (automatic)   |

No hosting fees, no build tools, no server required.
