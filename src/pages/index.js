import React, { Fragment } from "react";
import Interpolate from "@doist/react-interpolate";

import Url from "../components/Url";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import content from "../data/content.json";

export { default as Head } from "../components/Head";

export default () => {
  const urls = {
    url1: <Url href="https://qed.builders" />,
    url2: <Url href="https://timisoara2023.eu/en" />,
    url3: <Url href="https://sandbox.game" />,
    url4: <Url href="https://linktr.ee/cs_viitorul_timisoara" />,
    url5: <Url href="https://www.lacan.com/seminars1a.htm" />,
    url6: <Url href="https://en.wikipedia.org/wiki/Simulacra_and_Simulation" />,
    url7: <Url href="https://en.wikipedia.org/wiki/The_Denationalization_of_Money" />,
    url8: <Url href="https://asc.ohio-state.edu/kilcup.1/262/feynman.html" />,
    url9: <Url href="mailto:marius@qed.builders" />,
    strike: <span className="text-gray-100 line-through" />,
  };

  return (
    <Layout>
      <div className="grid gap-y-8">
        <Header />

        {content.map((text) => (
          <Fragment key={text}>
            <p>
              <Interpolate string={text} mapping={urls} />
            </p>
          </Fragment>
        ))}

        <Footer />
      </div>
    </Layout>
  );
};
