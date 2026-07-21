# AstraEdits — Website

A fast, dark-cinematic, multi-page static site for the AstraEdits video editing agency. Live at astraedits.com, auto-deployed via Vercel + GitHub.

## Files
- `index.html` — Home (hero, services, process, floating client-logo marquee, CTA)
- `work.html` — Portfolio (filterable grid; YouTube-embed tiles + external client-link tiles)
- `contact.html` — WhatsApp / Instagram / Email
- `styles.css`, `script.js`, `favicon.svg`, `vercel.json`

No build step, no dependencies. Just open `index.html` in a browser to preview.

---

## Before launch — fill in your real details

Find & replace across all three HTML files:

| Placeholder | Replace with | Example |
|---|---|---|
| `PLACEHOLDER_NUMBER` | Your WhatsApp number, country code, no `+`/spaces | `919876543210` |
| `PLACEHOLDER_HANDLE` | Your Instagram username | `astraedits` |
| `hello@astraedits.com` | Your real email | your address |

**Portfolio videos (`work.html`):**
- YouTube tiles: set `data-yt="VIDEO_ID"` — the ID is the part after `v=` or `youtu.be/`. e.g. `https://youtu.be/AbC123xyz` → `data-yt="AbC123xyz"`.
- Client-link tiles: replace `PLACEHOLDER_POST` in the `href` with the full Instagram/YouTube post URL.
- Edit each tile's `<h4>` title and `<span class="tag">` label.

**Client logos (`index.html` marquee):** either edit the chip text/initials, or swap a chip for a real logo image:
```html
<div class="logo-chip"><img class="thumb" src="logos/nova.png" alt="Nova"></div>
```
Put logo PNGs (transparent) in a `logos/` folder.

---

## Deploy to Vercel (free, ~2 minutes)

**Option A — drag & drop (easiest):**
1. Go to https://vercel.com and sign up / log in (GitHub or email).
2. Click **Add New → Project → Deploy** (or use the drag-drop area).
3. Drag this whole `astraedits` folder in. Vercel detects it as a static site — click **Deploy**.
4. You get a live `*.vercel.app` URL immediately.

**Option B — CLI:**
```bash
npm i -g vercel
cd astraedits
vercel        # follow prompts
vercel --prod # publish to production
```

## Connect your domain
1. In the Vercel project → **Settings → Domains → Add**, enter your domain.
2. Vercel shows DNS records to add. In your domain registrar's DNS settings:
   - Apex domain (`yourdomain.com`): add an **A record → 76.76.21.21**.
   - `www`: add a **CNAME → cname.vercel-dns.com**.
   (Or change nameservers to Vercel's if you prefer — the dashboard tells you exactly.)
3. Wait for DNS to propagate (minutes to a couple hours). HTTPS is issued automatically.

Done — your site is live on your domain.
