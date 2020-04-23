import React from "react";
import "./styles.css";
import StopWatch from "./StopWatch.js";
import ParagraphCounter from "./ParagraphCounter.js"

export default function App() {
  return (
    <div className="App">
      <StopWatch />
      <ParagraphCounter />
    </div>
  );
}
