import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";
import {FormField} from "../../../services/in-memory-data.service";

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css']
})
export class FieldErrorComponent implements OnInit {

  @Input() errors!: ValidationErrors;
  @Input() field!: FormField;

  constructor() { }

  ngOnInit(): void {
  }

}
