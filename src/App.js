import React from "react";
import { Route } from "react-router-dom";
import { HomePage } from "./containers/HomePage/HomePage";
import { Navigation } from "./components/index";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={HomePage} />
    </div>
  );
}
