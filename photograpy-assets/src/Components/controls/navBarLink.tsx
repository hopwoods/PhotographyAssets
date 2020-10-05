/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors, FontFamilies } from "../../style";
import { Link } from "react-router-dom";

export interface LinkProps {
  //Route to be used for the link
  to: string;

  //Value to displayed on screen
  value: string;
}

const style = css`  
  a {
    position: relative;
    color: ${ThemeColors.textInverse};
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;
  }
  a::before {
    content: "";
    position: absolute;
    height: 3px;
    right: 0px;
    bottom: -3px;
    left: 0px;
    background-color: $linkPink;
  }
  a:hover {
    color: ${ThemeColors.textInverse};
  }
  a:hover::before {
    background: linear-gradient(
      to right,
      ${ThemeColors.lightAccent} 40%,
      ${ThemeColors.primary} 75%
    );
  }
`;

export const NavBarLink: FunctionComponent<LinkProps> = ({
  to,
  value,
  ...props
}) => {
  return (
    <React.Fragment>
      <span css={style}>
        <Link to={to}>{value}</Link>
      </span>
    </React.Fragment>
  );
};
