/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";
import { NavBarLink, ToggleSwitch } from "../controls";
import { useStateContext, Actions } from "../../GlobalState";
import { FontFamilies, Gradients, cssGradients } from "../../style";

export const Navbar: FunctionComponent = ({ children }) => {
  const { globalState: state, dispatch } = useStateContext();
  const { darkMode } = state;

  const gradients: cssGradients = {
    gradient1: darkMode ? Gradients.DarkGradient1 : Gradients.LightGradient1,
    gradient2: darkMode ? Gradients.DarkGradient2 : Gradients.LightGradient2,
    textGradient: darkMode
      ? Gradients.DarkTextGradient
      : Gradients.LightTextGradient,
  };

  const themeColors = useTheme();
  const style = css`
    grid-column: 1 / span 1;
    background-color: none;
    color: ${themeColors.text};
    padding: 0.3rem;
    height: fit-content;
    z-index: 2;
    font-size: 0.9rem;
    text-transform: uppercase;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: minmax(325px, 1fr);
      grid-gap: 0em;
    }

    ul li {
      grid-column-start: 1 / span 1;
      justify-self: stretch;
      align-self: center;
      margin: 0.3rem;
      display: inline-block;
    }
    ul li.logo {
      grid-column-start: 1 / span 1;
      text-align: left;
      align-self: stretch;
    }

    ul li label {
      text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;
    display: inline-block;
    margin-right: 0.4rem;
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
        grid-column: 7 / span 3;
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
        justify-self: stretch;
        text-align: right;
      }
    }
  `;

  const toggleDarkMode = (value: boolean) => {
    dispatch(Actions.ToggleDarkMode(value));
  };

  return (
    <nav css={style} id="NavBar">
      <ul role="menubar">
        <li className="logo">
          <h2>Photography Assets</h2>
        </li>
        <li>
          <NavBarLink to="/" value="Home" />
        </li>
        <li>
          <NavBarLink to="/about" value="About Me" />
        </li>
        <li className="dark-mode-toggle">
          <label>Dark Mode?</label>
          <ToggleSwitch
            id="toggle-dark-mode"
            name="toggle-dark-mode"
            checked={darkMode ? true : false}
            optionLabels={["Yes", "No"]}
            small={false}
            disabled={false}
            onChange={() => toggleDarkMode(!darkMode)}
          />
        </li>
      </ul>
    </nav>
  );
};
