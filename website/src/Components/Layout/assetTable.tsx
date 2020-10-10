/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";
import { FontFamilies } from "../../style";
import { IAsset } from "../../Intefaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTheme from "../../Hooks/useTheme";
import Moment from "react-moment";
import "moment-timezone";

export interface ITableProps {
  data: IAsset[];
  loading: boolean;
}

export const AssetTable: FunctionComponent<ITableProps> = ({
  data,
  loading,
}) => {
  const themeColors = useTheme();
  const dateFormat = "Do MMM YYYY HH:mm";

  const style = css`
    border: 0;
    border-radius: 0.5em;
    color: ${themeColors.text};
    padding: 0;
    border-spacing: 0;
    margin: 1.5em auto;
    background: ${themeColors.tableBackground};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1),
      0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05),
      0px 30px 20px rgba(0, 0, 0, 0.05);
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

    thead tr:first-of-type th:first-of-type {
      border-top-left-radius: 0.5em;
    }

    thead tr:first-of-type th:last-of-type {
      border-top-right-radius: 5px;
    }

    span.loading {
      font-size: 1.5em;
      display: inline-block;
      width: 100%;
      text-align: center;
      color: ${themeColors.text};
    }
  `;

  const red = css`
    color: ${themeColors.red};
  `;

  const green = css`
    color: ${themeColors.green};
  `;

  const tableHeader = () => {
    return (
      <thead>
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
      </thead>
    );
  };

  const loadingContent = () => {
    return (
      <table css={style}>
        {tableHeader()}
        <tbody>
          <tr>
            <td colSpan={8}>
              <span className="loading">
                <FontAwesomeIcon icon={["fas", "spinner"]} spin /> Loading Data
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const dataTable = () => {
    return (
      <table css={style}>
        {tableHeader()}
        <tbody>
          {data.map((asset: IAsset) => (
            <tr key={asset.id} data-id={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.type.type}</td>
              <td>{asset.serialNumber}</td>
              <td className="number">
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(asset.value)}
              </td>
              <td className="number">
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(asset.price)}
              </td>
              <td className="center">
                {asset.owned ? (
                  <span css={green}>
                    <FontAwesomeIcon icon={["far", "check-circle"]} />
                  </span>
                ) : (
                  <span css={red}>
                    <FontAwesomeIcon icon={["far", "times-circle"]} />
                  </span>
                )}
              </td>
              <td>
                <Moment date={asset.dateCreated} format={dateFormat} />
              </td>
              <td>
                <Moment date={asset.dateModified} format={dateFormat} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const displayTable = () => {
    if (loading) {
      return loadingContent();
    } else {
      return dataTable();
    }
  };

  return displayTable();
};
