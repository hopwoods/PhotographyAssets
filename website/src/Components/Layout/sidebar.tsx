/** @jsx jsx */
import { FunctionComponent, useState, useEffect, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../controls";

export interface ISideBarProps {
  backgroundColor: string;
  isCollapsed: boolean;
}

export const Sidebar: FunctionComponent<ISideBarProps> = ({
  backgroundColor,
  isCollapsed,
  children,
}) => {
  const themeColors = useTheme();
  const [collapsed, setCollapse] = useState(isCollapsed);
  const [displayState, setDisplayState] = useState("block");

  useEffect(() => {
    if (collapsed) {
      setDisplayState("none");
    } else {
      setDisplayState("block");
    }
  }, [collapsed]);

  const toggleSideBar = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      collapsed ? setCollapse(false) : setCollapse(true);
    },
    [collapsed]
  );

  const style = css`
    grid-column: 1 / span 1;
    grid-row: 2 / span 2;
    width: fit-content;
    height: fit-content;
    border: 0;
    border-radius: 0.25em;
    color: ${themeColors.Grey2};
    padding: 0;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 3em;
    grid-gap: 0;
  `;

  const containerStyle = css`
    grid-column: 1 / span 1;
    display: ${displayState};
    background-color: ${backgroundColor};
    padding: 0.5em 1em;
    box-shadow: 3px 0px 1px 0px rgba(0, 0, 0, 0.3);
  `;
  const menuStyle = css`
    grid-column: 2 / span 1;
    text-align: center;
    padding: 0.2em;
    background-color: ${themeColors.tableBackground};
    width: auto;
    justify-self: stretch;
  `;

  const borderStyle = (collapsed: boolean) => {
    if (!collapsed) {
      return css`
        border-radius: 0;
        border-top-right-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
      `;
    } else {
      return css`
        border-radius: 0.5em;
      `;
    }
  };

  return (
    <aside css={style}>
      <div css={containerStyle}>{children}</div>
      <div css={[menuStyle, borderStyle(collapsed)]}>
        <Button
          type="text"
          primary={true}
          size="medium"
          color={themeColors.text}
          onClick={toggleSideBar}
        >
          {collapsed ? (
            <FontAwesomeIcon icon={["fas", "plus"]} />
          ) : (
            <FontAwesomeIcon icon={["fas", "times"]} />
          )}
        </Button>
      </div>
    </aside>
  );
};
