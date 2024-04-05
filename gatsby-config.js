/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: ["gatsby-plugin-postcss", { resolve: "gatsby-plugin-google-fonts", options: { fonts: ["Inconsolata"] } }],
};
