/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { NavBarLink, ToggleSwitch } from "../controls";
import { useStateContext, Actions } from "../../GlobalState";
import { FontFamilies } from "../../style";
import { getGradients } from "../../functions";
import useTheme from "../../Hooks/useTheme";

export const Navbar: FunctionComponent = ({ children }) => {
  const { globalState: state, dispatch } = useStateContext();
  const { darkMode } = state;

  const gradients = getGradients(darkMode);
  const themeColors = useTheme();
  const style = css`
    grid-column: 1 / span 1;
    background: ${gradients.gradient1};
    color: ${themeColors.text};
    padding: 0.3rem;
    height: fit-content;
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
      justify-self: center;
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
      background: none;
      ul {
        grid-template-columns: repeat(9, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
        justify-self: stretch;
        align-self: center;

      }
      ul li.logo {
        grid-column: 1 / span 3;
        font-size: 0.8rem;
      }
      ul li.dark-mode-toggle {
        grid-column: 7 / span 3;
        text-align: right;        
      }
    }

    @media (min-width: 769px) {
      font-size: 1rem;
      background: none;
      ul {
        grid-template-columns: repeat(12, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 3;
      }
      ul li.dark-mode-toggle {
        grid-column: 10 / span 3;
        justify-self: stretch;
        text-align: right;
      }
    }

    @media (min-width: 1025px) {
      font-size: 1rem;
      background: none;
      ul {
        grid-template-columns: repeat(16, minmax(65px, 1fr));
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
      ul li.logo {
        grid-column: 1 / span 3;
      }
      ul li.dark-mode-toggle {
        grid-column: 14 / span 3;
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
