import React from "react";
import logo from "./logo.svg";
import Clarifai from "clarifai";

import Particles from "react-particles-js";

import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

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
};
const app = new Clarifai.App({
  apiKey: "a5daef353be34f6793775796e2b85061",
});
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    console.log(app.models);
    app.models
      .predict(
        Clarifai.COLOR_MODEL,
        this.state.input
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onInputChange = (e) => {
    this.setState({input: e.target.value})
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onButtonSubmit={this.onButtonSubmit}
          onInputChange={this.onInputChange}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
