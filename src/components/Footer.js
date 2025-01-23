import React from "react";
import { twMerge } from "tailwind-merge";

import socials from "../data/socials.json";

export default () => (
  <footer>
    <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
      {socials.map(({ href, text, strike }) => (
        <li key={href} className={twMerge(strike && "line-through")}>
          <a href={href} target="_blank" rel="noreferrer" className="text-gray-100 hover:text-white">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);
