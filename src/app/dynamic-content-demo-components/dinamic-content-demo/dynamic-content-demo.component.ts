import {Component, Input, OnInit} from '@angular/core';
import {AdService} from "../../services/ad.service";
import {AdComponent} from "../AdComponent";

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-dynamic-content-demo',
  templateUrl: './dynamic-content-demo.component.html',
  styleUrls: ['./dynamic-content-demo.component.css']
})
export class DynamicContentDemoComponent implements OnInit {

  ads: AdComponent[] = [];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.fetchAds();
  }

  fetchAds() {
    this.adService.getAds().subscribe( res => this.ads = res);
  }

}
