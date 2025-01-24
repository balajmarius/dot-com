/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    { resolve: "gatsby-plugin-google-fonts", options: { fonts: ["Inconsolata"] } },
    { resolve: "gatsby-plugin-google-analytics", options: { trackingId: "G-TKEZZNZ9RP" } },
    { resolve: "gatsby-plugin-alias-imports", options: { alias: { "@": "src" } } },
  ],
};
