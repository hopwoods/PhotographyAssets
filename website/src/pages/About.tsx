/** @jsx jsx */
//import React from "react";
import { jsx, css } from "@emotion/core";
import { Quote } from "../Components/Typeography";

function App() {
  const style = css`
    grid-column: 1 / span 2;
  `;
  return (
    <div css={style}>
      <h2>About Me</h2>
      <p>Hi I'm Stuart Hopwood and I am a Developer</p>
      <Quote>Things aren’t always #000000 and #FFFFFF</Quote>
    </div>
  );
}

export default App;
