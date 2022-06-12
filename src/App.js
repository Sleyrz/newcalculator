import React from "react";
import './App.css';
import ShowAddNumbers from "./Components/add_numbers";
import Show from "./Components/view";

function App() {
  return (
      <React.Fragment>
              <Show value ="Najprostszy"/>
              <ShowAddNumbers/>
      </React.Fragment>
  );
}

export default App;
