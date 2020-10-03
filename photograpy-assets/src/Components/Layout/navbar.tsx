/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";
import { Link } from "react-router-dom";

const style = css`
  grid-column: 1 / span 1;
  justify-self: stretch;
  background-color: ${ThemeColors.primary};
  color: ${ThemeColors.textInverse};

  span {
    margin-right: 1rem;
  }

  a {
    margin-right: 1rem;
    color: ${ThemeColors.textInverse};
    text-decoration: none;
  }
`;

export const Navbar: FunctionComponent = ({ children }) => {
  return (
    <nav css={style}>
      <span>Logo Here</span>
      <span>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </span>
    </nav>
  );
};
