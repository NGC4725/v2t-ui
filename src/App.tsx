import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@cloudscape-design/global-styles/index.css";
import { Urls } from "./routes/Urls";
import { AppLayout } from "@cloudscape-design/components";
import { MainNavigation } from "./components/MainNavigation";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <AppLayout content={<Urls />} navigationOpen={false} />
    </React.Fragment>
  );
}

export default App;
