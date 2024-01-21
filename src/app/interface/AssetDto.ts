import { AssetType } from "./AssetType";
import { CryptoActivityType } from "./CryptoActivityType";

export interface AssetDto {
  name: string;
  amount: number;
  type: AssetType;
  cryptoActivityType: CryptoActivityType;
  userEmail: string;
}
