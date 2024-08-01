module.exports = {
  siteUrl: "https://eyesonnumber.com",
  generateRobotsTxt: true, // Generate a robots.txt
  sitemapSize: 7000, // Split sitemap into multiple files if you have many pages
  outDir: "./public", // Output directory for the sitemap files, typically 'public'

  // Exclude specific paths
  //exclude: ["/secret-page", "/admin/*"],

  // Define how dynamic paths are handled
  transform: async (config, path) => {
    return {
      loc: path, // The URL of the page
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }, { userAgent: "Googlebot" }],
    // additionalSitemaps: [
    //   "https://eyesonnumber.com/server-sitemap.xml", // Add custom sitemaps if needed
    // ],
  },
};
