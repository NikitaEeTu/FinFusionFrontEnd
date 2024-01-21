import { AssetUpdateAction } from "./AssetUpdateAction";

export interface AssetUpdateDto {
  action: AssetUpdateAction;
  amount: number;
}
