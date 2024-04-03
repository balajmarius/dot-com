import React from "react";

import socials from "../data/socials.json";

export default () => (
  <footer>
    <ul className="flex space-x-4">
      {socials.map(({ href, text }) => (
        <a href={href} key={href} target="_blank" rel="noreferrer" className="text-gray-100 hover:text-white">
          {text}
        </a>
      ))}
    </ul>
  </footer>
);
