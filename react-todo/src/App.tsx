import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import "./App.css";
import { JsonPresenter } from "./components";

const Home: React.FC<RouteComponentProps> = () => <div>Home</div>;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Home path="/foo" />
      </Router>

      <JsonPresenter />
    </>
  );
};

export default App;
