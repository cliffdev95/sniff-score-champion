// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// 👇 1️⃣ Your live site domain — make sure it's correct
const siteUrl = 'https://www.sniffcheck.tech';

// 👇 2️⃣ List all pages (React Router paths) your users can visit
// Edit or add to this list depending on your app’s actual routes
const pages = [
  '/',               // Home page
  '/calculate',      // Page where users calculate their sniff score
  '/results',        // Results or score display page
  '/ranking',        // Funny leaderboard or rankings
  '/share',          // Page for sharing results
  '/FAQ',          // FAQ page
  '/contact',        // Contact or feedback page
];

// 👇 3️⃣ Create the sitemap and save it to /public
const sitemap = new SitemapStream({ hostname: siteUrl });
const writeStream = createWriteStream('./public/sitemap.xml');

(async () => {
  try {
    for (const page of pages) {
      sitemap.write({
        url: page,
        changefreq: 'weekly',
        priority: page === '/' ? 1.0 : 0.8,
      });
    }
    sitemap.end();

    const data = await streamToPromise(sitemap);
    writeStream.write(data);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
})();
