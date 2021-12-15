import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private adUrl: string = 'api/ad';


  constructor(private httpClient: HttpClient) {}

  getAds(): Observable<any> {
    return this.httpClient.get<any[]>(this.adUrl)
      .pipe(
        tap(res => console.log("fetched ads: " + JSON.stringify(res))),
        catchError((err) => of(console.error(err)))
      );
  }

}
