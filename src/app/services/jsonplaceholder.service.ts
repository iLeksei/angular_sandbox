import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http: HttpClient) { }


}
