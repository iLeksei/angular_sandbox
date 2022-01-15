import {Component, Input, OnInit, Output} from '@angular/core';
import {FormField} from "../../../services/in-memory-data.service";
import {ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class DynamicFormFieldComponent implements OnInit{

  @Input() formField!: FormField;
  @Input() id!: string;
  @Input() control: any;
  @Input() dict!: {value: string, label: string}[];

  constructor() { }

  ngOnInit(): void {
  }
}
