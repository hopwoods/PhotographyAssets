import { IAssetType } from "./AssetType";

export interface IAsset {
  id?: number;
  name: string;
  type: IAssetType;
  serialNumber: string;
  value: number;
  price: number;
  owned: boolean;
  dateCreated: Date;
  dateModified: Date;
}
