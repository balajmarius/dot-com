import React, { Fragment } from "react";
import FeatherIcon from "feather-icons-react";
import Interpolate from "@doist/react-interpolate";

import Url from "../components/Url";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import content from "../data/content.json";

export { default as Head } from "../components/Head";

export default () => {
  const urls = {
    url1: <Url href="https://www.linkedin.com/company/qed-builders-software" />,
    url2: <Url href="https://timisoara2023.eu/en" />,
    url3: <Url href="https://csviitorultimisoara.ro" />,
    url4: <Url href="https://en.wikipedia.org/wiki/Simulacra_and_Simulation" />,
    url5: <Url href="https://en.wikipedia.org/wiki/The_Denationalization_of_Money" />,
    url6: <Url href="https://en.wikipedia.org/wiki/Richard_Feynman" />,
  };

  return (
    <Layout>
      <div className="grid gap-y-8">
        {content.map(({ text, icon }) => (
          <Fragment key={icon}>
            <FeatherIcon icon={icon} className="text-white w-6 h-6 md:w-8 md:h-8" />
            <p>
              <Interpolate string={text} mapping={urls} />
            </p>
          </Fragment>
        ))}
      </div>

      <Footer />
    </Layout>
  );
};
