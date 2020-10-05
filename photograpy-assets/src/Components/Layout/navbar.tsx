/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { ThemeColors } from "../../style";
import { NavBarLink } from "../controls";
import { useStateContext } from "../../GlobalState";

const style = css`
  grid-column: 1 / span 1;
  background-color: ${ThemeColors.darkShades};
  color: ${ThemeColors.textInverse};
  padding: 0.3rem;
  height: fit-content;
  z-index: 2;
  font-size: 0.9rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: minmax(325px, 1fr);
    grid-gap: 0em;
    justify-content: center;
    justify-items: center;
  }

  ul li {
    grid-column-start: 1 / span 1;
    justify-self: center;
    align-self: center;
    margin: 0.3rem;
    display: inline-block;
  }
  ul li.logo {
    grid-column-start: 1 / span 1;
  }

  @media (min-width: 600px) {
    font-size: 1rem;

    ul {
      grid-template-columns: repeat(9, minmax(65px, 1fr));
      grid-template-rows: minmax(50px, 1fr);
    }

    ul li {
      grid-column-start: span 1;
    }
    ul li.logo {
      grid-column: 1 / span 2;
    }
    ul li.dark-mode-toggle {
      grid-column: 8 / span 2;
    }
  }

  @media (min-width: 769px) {
    font-size: 1rem;

    ul {
      grid-template-columns: repeat(12, minmax(65px, 1fr));
      grid-template-rows: minmax(50px, 1fr);
    }

    ul li {
      grid-column-start: span 1;
    }
    ul li.logo {
      grid-column: 1 / span 2;
    }
    ul li.dark-mode-toggle {
      grid-column: 11 / span 2;
    }
  }
`;

export const Navbar: FunctionComponent = ({ children }) => {
  const { globalState } = useStateContext();
  const { globals } = globalState;
  return (
    <nav css={style}>
      <ul>
        <li className="logo">
          <span>Photography Assets</span>
        </li>
        <li>
          <NavBarLink to="/" value="Home" />
        </li>
        <li>
          <NavBarLink to="/about" value="About Me" />
        </li>
        <li className="dark-mode-toggle">
          Dark Mode : {globals.darkMode ? "True" : "False"}
        </li>
      </ul>
    </nav>
  );
};
