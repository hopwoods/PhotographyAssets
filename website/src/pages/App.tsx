/** @jsx jsx */
import React from "react";
import { useEffect, useState, useCallback } from "react";
import { jsx, css } from "@emotion/core";
import { Sidebar } from "../Components/Layout";
import useTheme from "../Hooks/useTheme";
import axios, { AxiosResponse } from "axios";
import { AssetTable } from "../Components/Layout/assetTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextBox } from "../Components/controls";
import { IAsset } from "../Intefaces";
import moment from "moment";
import "moment-timezone";

function App() {
  const themeColors = useTheme();
  const [tableData, settableData] = useState([]);
  const [loading, setloading] = useState(true);
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState({
    id: 0,
    type: "",
  });

  const apiUrl = "https://localhost:5001";

  const loadAssetData = useCallback(() => {
    axios.get(`${apiUrl}/Assets/GetAll`).then((response: AxiosResponse) => {
      settableData(response.data);
      setloading(false);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    loadAssetData();
  }, [loadAssetData]);

  const intro = css`
    grid-column: 1 / span 2;
  `;

  const main = css`
    grid-column: 2 / span 1;
  `;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const newAsset: IAsset = {
      name: assetName,
      type: assetType,
      serialNumber: "",
      value: 0,
      price: 0,
      owned: true,
      dateCreated: new Date(),
      dateModified: new Date(),
    };
    console.log(`Form Sumitted: ${newAsset}`);
    e.preventDefault();
  };

  const handleAssetNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAssetName(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      <Sidebar backgroundColor={themeColors.sideBarGrey} isCollapsed={true}>
        <h5>Add Asset</h5>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextBox
            onChange={(e) => handleAssetNameChange(e)}
            name="AssetName"
            label="Asset Name"
            displayLabel={false}
            placeholder="Asset Name"
          />
        </form>
      </Sidebar>
      <div css={intro}>
        <h3>Welcome to the Stuart Hopwood Photography Asset Database</h3>
        <p>
          Below you can find a list of all your Photography Gear, how much it
          worth, and how much you paid.
          <br />
          You also find serial numbers for items that have them which will be
          usefult for insurance purposes.
          <br />
          Click the <FontAwesomeIcon icon={["fas", "plus"]} /> button to add a
          new asset to the database.
        </p>
      </div>
      <div css={main}>
        <h4>Your Gear</h4>
        <AssetTable data={tableData} loading={loading} />
      </div>
    </React.Fragment>
  );
}

export default App;
