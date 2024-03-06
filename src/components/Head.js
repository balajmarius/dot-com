import React from "react";

import seo from "../data/seo.json";
import favicon from "../static/images/favicon.svg";

export default () => (
  <>
    <html lang="en" />
    <meta name="description" content={seo.description} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:url" content={seo.url} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:creator" content={seo.twitter} />
    <link rel="icon" href={favicon} />
    <title>{seo.title}</title>
    <body className="font-sans bg-black text-gray-50 text-xl md:text-2xl" />
  </>
);
