/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function.
The props name, small, disabled and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

export interface IToggleSwitchProps {
  id: string;
  checked: boolean;
  onChange(value: boolean): void;
  name: string;
  optionLabels: string[];
  small: boolean;
  disabled: boolean;
}

export const ToggleSwitch: FunctionComponent<IToggleSwitchProps> = ({
  id,
  name,
  checked,
  onChange,
  optionLabels,
  small,
  disabled,
}) => {
  const themeColors = useTheme();

  const style = css`
    .toggle-switch {
      position: relative;
      margin-right: 0.8em;
      width: 4.4em;
      display: inline-block;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      text-align: left;
      top: -0.1em;
    }
    .toggle-switch-checkbox {
      display: none;
    }
    .toggle-switch-label {
      display: block;
      overflow: hidden;
      cursor: pointer;
      border: 0 solid #bbb;
      border-radius: 20px;
      margin: 0;
    }
    .toggle-switch-label:focus {
      outline: none;
    }
    .toggle-switch-label:focus > span {
      box-shadow: 0 0 2px 5px red;
    }
    .toggle-switch-label > span:focus {
      outline: none;
    }
    .toggle-switch-inner {
      display: block;
      width: 200%;
      margin-left: -100%;
      transition: margin 0.3s ease-in 0s;
    }
    .toggle-switch-inner:before,
    .toggle-switch-inner:after {
      display: block;
      float: left;
      width: 50%;
      height: 2.1em;
      padding: 0;
      line-height: 1.9em;
      color: ${themeColors.white};
      font-weight: bold;
      box-sizing: border-box;
      padding-top: 0.15em;
    }
    .toggle-switch-inner:before {
      content: attr(data-yes);
      text-transform: uppercase;
      padding-left: 0;
      background-color: ${themeColors.green};
      color: ${themeColors.white};
    }
    .toggle-switch-disabled {
      background-color: ${themeColors.disabledColour};
      cursor: not-allowed;
    }
    .toggle-switch-disabled:before {
      background-color: ${themeColors.disabledColour};
      cursor: not-allowed;
    }
    .toggle-switch-inner:after {
      content: attr(data-no);
      text-transform: uppercase;
      padding-right: 0.6em;
      background-color: ${themeColors.primary};
      color: ${themeColors.white};
      text-align: right;
    }
    .toggle-switch-switch {
      display: block;
      width: 1.5em;
      height: 1.5em;
      margin: 0.25em;
      background: ${themeColors.white};
      position: absolute;
      top: 0.05em;
      bottom: 0;
      right: 2.4em;
      border: 0 solid #bbb;
      border-radius: 20px;
      transition: all 0.3s ease-in 0s;
    }
    .toggle-switch-checkbox:checked
      + .toggle-switch-label
      .toggle-switch-inner {
      margin-left: 0;
    }
    .toggle-switch-checkbox:checked
      + .toggle-switch-label
      .toggle-switch-switch {
      right: 0;
    }
    .small-switch {
      width: 2.5em;
    }
    .small-switch .toggle-switch-inner:after,
    .small-switch .toggle-switch-inner:before {
      content: "";
      height: 1em;
      line-height: 1em;
    }
    .small-switch .toggle-switch-switch {
      width: 1em;
      right: 1.2em;
      margin: 2px;
      height: 0.6em;
    }
    @media screen and (max-width: 991px) {
      .toggle-switch {
        transform: scale(0.9);
      }
    }
    @media screen and (max-width: 767px) {
      .toggle-switch {
        transform: scale(0.825);
      }
    }
    @media screen and (max-width: 575px) {
      .toggle-switch {
        transform: scale(0.75);
      }
    }
  `;

  function handleKeyPress(e: React.KeyboardEvent<HTMLLabelElement>) {
    if (e.keyCode !== 32) return;

    e.preventDefault();
    onChange(!checked);
  }

  return (
    <span css={style}>
      <div className={"toggle-switch" + (small ? " small-switch" : "")}>
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {id ? (
          <label
            className="toggle-switch-label"
            tabIndex={disabled ? -1 : 1}
            onKeyDown={(event: React.KeyboardEvent<HTMLLabelElement>) =>
              handleKeyPress(event)
            }
            htmlFor={id}
          >
            <span
              className={
                disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
              tabIndex={-1}
            />
            <span
              className={
                disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
              tabIndex={-1}
            />
          </label>
        ) : null}
      </div>
    </span>
  );
};

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"],
};
