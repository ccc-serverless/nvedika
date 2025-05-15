import React, { lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./views/HomePage"));

function App() {
  return <Home />;
}

export default App;
