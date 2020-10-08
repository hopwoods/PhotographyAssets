/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies } from "../../style";
import { getGradients } from "../../functions";
import { useStateContext } from "../../GlobalState";

export const Quote: FunctionComponent = ({ children }) => {
  const { globalState: state } = useStateContext();
  const { darkMode } = state;
  const gradients = getGradients(darkMode);

  const grid = css`
    display: grid;
    grid-template-columns: 0.75em 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0em;
  `;
  const border = css`
    grid-column: 1 / span 1;
    background: ${gradients.borderGradient};
    border: 0;
    min-height: 5em;
  `;
  const style = css`
    grid-column: 2 / span 1;
    quotes: "\\201C""\\201D""\\2018""\\2019";
    font-family: ${FontFamilies.secondary};

    &:before {
      content: open-quote;
      font-size: 4em;
      margin-right: 0.15em;
      padding-left: 1em;
      vertical-align: 2em;
      font-weight: 700;
      background: ${gradients.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      top: 0.4em;
    }

    &:after {
      content: close-quote;
      font-size: 4em;
      margin-right: 0.15em;
      padding-left: 1em;
      vertical-align: 2em;
      font-weight: 700;
      background: ${gradients.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      top: 0.4em;
    }

    & p {
      font-weight: 600;
      font-size: 2em;
      display: inline;
      position: relative;
      top: -2.4em;
      background: ${gradients.textGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  return (
    <React.Fragment>
      <div css={grid}>
        <div css={border}></div>
        <div css={style}>
          <p>{children}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
