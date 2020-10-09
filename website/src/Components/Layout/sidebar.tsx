/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import useTheme from "../../Hooks/useTheme";

export interface ISideBarProps {
  backgroundColor: string;
}

export const Sidebar: FunctionComponent<ISideBarProps> = ({
  backgroundColor,
  children,
}) => {
  const themeColors = useTheme();
  const style = css`
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    background-color: ${backgroundColor};
    border: 0;
    border-radius: 0.25em;
    color: ${themeColors.Grey2};
    padding: 0 1em;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.3);
    margin-top: 1em;
  `;

  return <aside css={style}>{children}</aside>;
};
