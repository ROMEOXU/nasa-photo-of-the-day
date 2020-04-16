import React from "react";
import "./App.css";
import Parent from "./parent";
import styled from 'styled-components';
import MyButton from "./button";

const Romeo = styled.div`
font-family:American Typewriter, serif;
font-size:35px;
 color:#ff3333;
 `
function App() {
  return (
    <div className="App">
      <Romeo>
      romeo
      </Romeo>
      <Parent />
      <MyButton />
    </div>
  );
}

export default App;
