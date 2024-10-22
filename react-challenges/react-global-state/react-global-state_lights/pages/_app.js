import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // Lift the light state up to the App component
  const [lights, setLights] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function toggleLight(index) {
    setLights((prevLights) =>
      prevLights.map((light, i) => (i === index ? !light : light))
    );
  }

  const lightsOnCount = lights.filter((light) => light).length;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        lightsOnCount={lightsOnCount}
      />
    </Layout>
  );
}

// lights: Ein Array, das den Zustand jedes Lichts speichert (ein- oder ausgeschaltet).

// toggleLight: Diese Funktion schaltet das Licht um, wenn auf eines geklickt wird.

// lightsOnCount: Zählt, wie viele Lichter derzeit eingeschaltet sind, und übergibt diese Info an die HomePage.
