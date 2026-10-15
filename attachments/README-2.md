# ProfJero Hub

**https://profjerohub.pages.dev** is the home of ProfJero's four studios: Digital, Creative (product branding), Nourish and Agro. The site includes a booking wizard, a branded-product catalogue with quote requests, booking and quote tracking, and a client portal (bookings, quotes, projects and invoices, plus live chat).

## How it fits together

- **Database:** the Firestore project `jerohub-1`, shared with the [ProfJero portfolio](https://profjero.pages.dev).
  - Collections and security rules live in the portfolio repo (`DATABASE.md`, `firestore.rules`).
- **Admin:** there is no separate admin. Everything is managed from the portfolio dashboard at https://profjero.pages.dev/admin/, under the "ProfJero Hub" sidebar group. `/admin` on the Hub redirects there.
- **Media:** Cloudinary, configured in the same admin.

## Structure

```
ProfJero-Hub/          ← Cloudflare Pages output directory (deploy this folder)
  index.html, *-studio.html, work.html, booking/, portal/   (generated — see below)
  assets/js/           hub.js, booking.js, portal.js, hub-common.js, hub-render.js, status.js, hub-defaults.js
                       + shared modules copied from the portfolio repo (store, render, firebase, utils,
                         appearance, ripples, ui, defaults, studio-content, markdown, seed-posts)
  assets/css/          main.css (shared) + hub.css
  _redirects, _headers, robots.txt, sitemap.xml, llms.txt, site.webmanifest
scripts/build.mjs      generates the HTML pages, sitemap and llms.txt with full SEO markup
```

The pages are pre-rendered with the default content, so Google and AI crawlers see real text, images and JSON-LD (Organization logo, services, FAQs, breadcrumbs). On load they update from Firestore, so admin edits show up immediately.

```bash
node scripts/build.mjs        # regenerate pages after editing templates or default content
npx wrangler pages dev ProfJero-Hub   # preview locally
```

> **Shared modules.** Files in `assets/js/` that also exist in the portfolio repo must stay identical except `config.js`, where `SITE.id = "hub"`. When a shared file changes there, copy it here.

## Cloudflare Pages settings

- Build command: *(none)*
- Build output directory: `ProfJero-Hub`
- In Firebase → Authentication → Authorized domains, make sure `profjerohub.pages.dev` is listed.
