import { Component, OnInit } from '@angular/core';
import { AssetManagementService } from "../service/assetManagement/asset-management.service";
import { AssetDto } from "../interface/AssetDto";
import { AssetType } from "../interface/AssetType";
import { CryptoActivityType } from "../interface/CryptoActivityType";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private assetManagementService: AssetManagementService) {
  }

  ngOnInit(): void {
    //this.assetManagementService.getAsset("b410bfd2-09b1-48bc-a884-790f983442c4").subscribe(data => console.log(data));
    const asset: AssetDto = {
      name: "LTC",
      amount: 20,
      type: AssetType.CRYPTOCURRENCY,
      cryptoActivityType: CryptoActivityType.HOLDING,
      userEmail: "chloe@gmail.com"
    }
    this.assetManagementService.saveAsset(asset).subscribe(data => console.log(data));
    //this.assetManagementService.deleteAsset("2aee0038-ba17-44d0-a5c4-3db3fc057a2e").subscribe(data => console.log(data));
    // const assetUpdateDto: AssetUpdateDto = {
    //   action: Action.ADD,
    //   amount: 10
    // }
    //this.assetManagementService.updateAsset("0a34e4b8-9377-406c-84bb-41109556aab4", assetUpdateDto).subscribe(data => console.log(data));
  }

}
