import React from "react";
import logo from "./logo.svg";

import Particles from "react-particles-js";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
  // interactivity: {
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse"
  //     },
  //   },
  // },
};
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <faceRecognition/> */}
      </div>
    );
  }
}

export default App;
