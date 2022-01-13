import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  private url: string = "api/dynamicFormData";

  constructor(private http: HttpClient) {}

  getDynamicFormData() {
    return this.http.get(this.url)
      .pipe(
        tap( (res: any) => { console.log(`Fetched dynamic form data ${JSON.stringify(res)}` ) }),
        catchError((err) => of(console.error(err)))
      )
  }

}
