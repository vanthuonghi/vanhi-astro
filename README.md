# vanhi.id.vn — Astro

Trang web chính thức của Văn Hỉ, xây dựng lại từ Hugo sang **Astro v7**.

- Blog với Content Collections + Zod validation
- YouTube redirect pages
- Giải pháp, Công Cụ AI, Quà tặng, Liên hệ
- RSS feed, sitemap tự động
- Static HTML pages (club, off, sp, ...)

## Phát triển

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # Output: dist/
npm run preview   # Xem thử bản build
```

## Deploy lên Cloudflare Pages

1. Vào [Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git](https://dash.cloudflare.com/)
2. Chọn repo `vanthuonghi/vanhi-astro`
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Build output: `dist`
6. Deploy

Sau deploy, trỏ domain `vanhi.id.vn` vào Cloudflare Pages.

## Deploy lên GitHub Pages

1. Vào repo Settings → Pages → Source: **GitHub Actions**
2. Thêm file `.github/workflows/deploy.yml` với nội dung:

```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

## Cấu trúc

```
src/
├── content/          # Content collections
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro        # Trang chủ
│   ├── blog/              # Blog
│   ├── youtube/           # YouTube
│   ├── giai-phap/         # Giải pháp
│   ├── cong-cu-ai/        # Công Cụ AI
│   ├── qua-tang/          # Quà tặng
│   ├── lien-he/           # Liên hệ
│   ├── 404.astro
│   └── rss.xml.js
public/
├── css/style.css
├── favicon.svg, og-image.svg
├── _headers
└── *.html                 # Static pages
```