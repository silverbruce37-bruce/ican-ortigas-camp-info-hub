import { writeFileSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://ican-space.vercel.app';

const pages = [
    '/',
    '/vision',
    '/curriculum',
    '/fees',
    '/schools',
    '/living',
    '/community',
    '/golf-tour',
    '/counseling',
    '/galaxy',
    '/series',
    // Blogs will be dynamic in a real scenario, adding known ones manually for now
    '/series/waymaker'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
        .map((page) => {
            return `
  <url>
    <loc>${SITE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
        })
        .join('')}
</urlset>`;

const publicDir = resolve('public');
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
