import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit, AfterViewInit {

  username = new FormControl("");
  formGroup = new FormGroup({
    username: new FormControl("", [Validators.maxLength(10)]),
    age: new FormControl(),
  })
  @ViewChild("reactiveFormDemo") form: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.form.valueChanges
      .subscribe((data: any) => console.log('form changes', data));
  }


  fillForm() {
    this.formGroup.patchValue({
      username: "test",
      age: 30,
    })
  }
}
