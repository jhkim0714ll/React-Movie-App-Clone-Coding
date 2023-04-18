import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/home";
import Details from "./routes/Details";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/about" Component={Details} />
    </BrowserRouter>
  );
}

export default App;
