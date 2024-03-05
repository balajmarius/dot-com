import React from "react";

import socials from "../data/socials.json";

export default () => (
  <footer className="border-t border-gray-150 text-base pt-8">
    <ul className="flex space-x-8">
      {socials.map(({ href, text }) => (
        <a
          href={href}
          key={href}
          target="_blank"
          rel="noreferrer"
          className="transition-all text-gray-100 hover:text-white"
        >
          {text}
        </a>
      ))}
    </ul>
  </footer>
);
