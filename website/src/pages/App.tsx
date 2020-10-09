/** @jsx jsx */
import React from "react";
import { useEffect, useState, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import { Sidebar } from "../Components/Layout";
import useTheme from "../Hooks/useTheme";
import axios, { AxiosResponse } from "axios";
import { AssetTable } from "../Components/Layout/assetTable";

function App() {
  const themeColors = useTheme();
  const [tableData, settableData] = useState([]);
  const apiUrl = "https://localhost:5001";

  const loadAssetData = useCallback(() => {
    axios.get(`${apiUrl}/Assets/GetAll`).then((response: AxiosResponse) => {
      settableData(response.data);
      console.log(response.data);
    });
  }, []);

  //The doggies are loaded initially
  useEffect(() => {
    loadAssetData();
  }, [loadAssetData]);

  const main = css`
    grid-column: 2 / span 1;
  `;
  return (
    <React.Fragment>
      <Sidebar backgroundColor={themeColors.sideBarGrey}>
        <h4>Sidebar Here</h4>
      </Sidebar>
      <div css={main}>
        <h3>Welcome to the Suart Hopwood Photography Asset Database</h3>
        <p>
          Below you can find a list of all your Photography Gear, how much it
          worth, and how much you paid.
          <br />
          You also find serial numbers for items that have them which will be
          usefult for insurance purposes.
        </p>
      </div>
      <div css={main}>
        <h4>Your Gear</h4>
        <AssetTable data={tableData} />
      </div>
    </React.Fragment>
  );
}

export default App;
