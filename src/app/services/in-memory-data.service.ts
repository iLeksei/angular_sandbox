import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

export interface FormField {
  type: string,
  validators: string[],
  max?: number,
  min?:number,
  maxLength?: number,
  minLength?: number,
  default?: string | number | boolean,
  errorMessage?: string,
  label: string,
  name: string,
}

export interface FormBlock {
  fields: FormField[],
  name: string,
}

export interface FormArea {
  name: string,
  fields?: FormField[],
  blocks?: FormBlock[],
}

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
    const dynamicFormData: FormArea[] = [
      {
        name: "userData",
        fields: [
          { type: "text",name: "username", label: "username", validators: ["required"], maxLength: 10, minLength: 2 },
          { type: "number", name: "age", label: "age", validators: ["required"], max: 100, min: 18 },
        ]
      },
      {
        name: "userBank",
        fields: [
          { name: "cardNumber", label: "card number", type: "number", validators: [] },
          { name: "cardOpenDate", label: "card open date", type: "date", validators: [] },
        ],
        blocks: [
          { name: "currencies", fields: [
              { name: "currency", label: "currency name", type: "text", validators: [] },
              { name: "currencyAmount", label: "currency amount", type: "number", validators: [] },
            ]
          }
        ]
      }
    ]
    return {ad, dynamicFormData};
  }
}
