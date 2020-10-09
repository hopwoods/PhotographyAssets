/** @jsx jsx */
import { FunctionComponent, useEffect, useState } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies } from "../../style";
import useTheme from "../../Hooks/useTheme";
import { IAsset } from "../../Intefaces";

export interface ITableProps {
  data: IAsset[];
}

export const AssetTable: FunctionComponent<ITableProps> = ({ data }) => {
  const themeColors = useTheme();

  const style = css`
    border: 1px solid ${themeColors.Grey3};
    border-collapse: collapse;
    color: ${themeColors.darkAccent};
    width: 100%;
    font-weight: 300;
    font-family: ${FontFamilies.secondary};
    td {
      padding: 0.4em;
      text-align: left;
    }
    th {
      font-family: ${FontFamilies.secondary};
      font-weight: 600;
      border-bottom: 1px solid ${themeColors.Grey3};
      background-color: ${themeColors.sideBarGrey};
      text-align: left;
      padding: 0.4em;
    }
    td.number,
    th.number {
      text-align: right !important;
    }
    td.center,
    th.center {
      text-align: center !important;
    }
  `;
  return (
    <table css={style}>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Serial Number</th>
        <th className="number">Value</th>
        <th className="number">Price</th>
        <th className="center">Own This?</th>
        <th>Date Added</th>
        <th>Date Modified</th>
      </tr>
      {data.map((asset) => (
        <tr data-id={asset.id}>
          <td>{asset.name}</td>
          <td>{asset.type.name}</td>
          <td>{asset.serialNumber}</td>
          <td className="number">{asset.value}</td>
          <td className="number">{asset.price}</td>
          <td className="center">{asset.owned}</td>
          <td>{asset.dateCreated}</td>
          <td>{asset.dateModified}</td>
        </tr>
      ))}
    </table>
  );
};
