import { Component, OnInit } from '@angular/core';
import {FormArea, FormBlock, FormField} from "../services/in-memory-data.service";
import {DynamicFormService} from "./dynamic-form.service";
import {Form, FormArray, FormBuilder, FormControl, FormGroup, Validator, ValidatorFn, Validators} from "@angular/forms";
import {tap} from "rxjs";

/**
 * todo: to support select
 */
@Component({
  selector: 'app-dynamic-form-demo',
  templateUrl: './dynamic-form-demo.component.html',
  styleUrls: ['./dynamic-form-demo.component.css']
})
export class DynamicFormDemoComponent implements OnInit {

  public formDto!: FormArea[];
  public formData: any = new FormGroup({});

  constructor(private dynamicFormService: DynamicFormService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicFormService.getDynamicFormData()
      .pipe(
        tap((data: FormArea[]) => { this.buildDynamicForm(data) })
      ).subscribe( (formDto: FormArea[]) => this.formDto = formDto);
  }

  /**
   *
   */
  buildDynamicForm(formDto: FormArea[]) {
    const formData = new FormGroup({});
    formDto?.forEach((area: FormArea) => {
      const areaFormGroup = new FormGroup(this.getFieldControls(area.fields || []));
      formData.setControl(area.name, areaFormGroup);
      area.blocks?.forEach( (block: FormBlock) => {
        if (block.fields?.length > 0) {
          areaFormGroup.setControl(block.name, new FormArray([]));
        }
      })
      this.formData = formData;
    })
    console.log(this.formData);
    console.log(this.formData.getRawValue())
  }

  getFieldControls(fields: FormField[]): { [k in string]: FormControl } {
    const fieldsControls: any = {};
    fields.forEach( (field) => {
      fieldsControls[field.name] = new FormControl("", this.getValidators(field));
    })
    return fieldsControls;
  }

  /**
   * todo custom validator with comparing field's data from different areas
   */
  getValidators(field: FormField): ValidatorFn[] {
    const validators = [];
    field.max ? validators.push(Validators.max(field.max)) : null;
    field.min ? validators.push(Validators.min(field.min)) : null;
    field.maxLength ? validators.push(Validators.maxLength(field.maxLength)) : null;
    field.minLength ? validators.push(Validators.maxLength(field.minLength)) : null;
    return validators;
  }


  onSubmit() {
    console.log(this.formData.getRawValue());
    this.formData.reset();
  }

  reset() {
    this.formData.reset();
  }

  addBlock(areaName: string, blockName: string) {
    if (areaName && blockName) {
      const blockData = this.formData.get(areaName).get(blockName);
      const areaDto = this.formDto.find( (area: FormArea) => area.name === areaName);
      const  blockDto = areaDto?.blocks?.find( (block: FormBlock) => block.name === blockName);
      const fields = this.getFieldControls(blockDto?.fields || []);
      blockData.push(new FormGroup(fields));
    }
  }

  getBlock(areaName: string, blockName: string) {
    if (!areaName || !blockName) { return null; }
    const area = this.formData.controls[areaName];
    return area != null ? area.controls[blockName].controls : null;
  }
}
