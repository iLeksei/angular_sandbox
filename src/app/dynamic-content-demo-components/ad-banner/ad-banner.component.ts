import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, Type, ViewChild} from '@angular/core';
import {AdDirective} from "../../directives/ad.directive";
import {AdComponent} from "../ad/ad.component";
import {AdComponent as AdComponentInterface} from "../AdComponent";

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnDestroy, OnChanges {

  private intervalId: number | undefined;
  private currIdx: number = -1;
  @Input() ads: AdComponentInterface[] = [];
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["ads"]) {
      clearInterval(this.intervalId);
      this.loadComponent();
      this.loadAd();
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  loadComponent() {
    if (this.ads?.length) {
      this.currIdx = (this.currIdx + 1) % this.ads.length;
      const adItem: AdComponentInterface = this.ads[this.currIdx];
      if (adItem) {
        this.adHost.viewContainerRef.clear();
        // @ts-ignore
        const componentRef = this.adHost.viewContainerRef.createComponent<AdComponentInterface>(AdComponent);
        componentRef.instance.data = adItem.data;
        componentRef.instance.id = adItem.id;
      }
    }
  }

  loadAd() {
    if (this.ads?.length) {
      this.intervalId = setInterval(() => {
        this.loadComponent();
      }, 3000);
    }
  }

}
