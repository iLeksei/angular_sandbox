import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    const ad: { id: number, data: string }[] =  [
      { id: 1, data: "Hello mate, There is no tomorrow, do it now!" },
      { id: 2, data: "Hola! Everything will be grate!" },
      { id: 3, data: "Hi! Do everything for your dream!" },
    ];
    return {ad};
  }
}
