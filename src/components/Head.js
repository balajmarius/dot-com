import React from "react";

import seo from "../data/seo.json";
import favicon from "../static/images/favicon.svg";
import card from "../static/images/card.svg";

export default () => (
  <>
    <html lang="en" />
    <meta name="description" content={seo.description} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:url" content={seo.url} />
    <meta property="og:description" content={seo.description} />
    <meta property="og:image" content={card} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={seo.title} />
    <meta property="twitter:url" content={seo.url} />
    <meta property="twitter:description" content={seo.description} />
    <meta property="twitter:creator" content={seo.twitter} />
    <meta property="twitter:image" content={card} />
    <link rel="icon" href={favicon} />
    <title>{seo.title}</title>
    <body className="font-sans bg-black text-gray-50 text-sm selection:bg-blue selection:text-white" />
  </>
);
