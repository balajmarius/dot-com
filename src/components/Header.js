import React from "react";

import logo from "../static/images/logo.svg";

export default () => (
  <header>
    <a href="/" target="_self">
      <img src={logo} className="w-6" />
    </a>
  </header>
);
