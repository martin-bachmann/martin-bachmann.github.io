import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";
import backgroundImg from "./data/images/sand-bg.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img class="bg-img" src={backgroundImg} alt="Imagem de fundo - areia" />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/project/:id" component={Project} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
