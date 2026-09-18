const path = require("path");
const fs = require("fs");

// Add your site's base URL here
const SITE_URL = "https://avantari.org";

exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  if (result.errors) {
    console.error("Sitemap query errors:", result.errors);
    return;
  }

  const staticPages = result.data.allSitePage.nodes
    .map(({ path: pagePath }) => pagePath)
    .filter(p => !p.includes("/404") && !p.includes("/dev-404-page"));

  const now = new Date().toISOString();

  const urls = staticPages.map(pagePath => {
    return `
  <url>
    <loc>${SITE_URL}${pagePath}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${pagePath === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  const outputPath = path.join("./public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ sitemap.xml written to ${outputPath} (${urls.length} URLs)`);
};