import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";


export class CustomValidators extends Validators {

  static lengthRange(minLength: number | undefined, maxLength: number | undefined): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!maxLength || !minLength) { return null };
      if (control.value && control.value?.length >= minLength && control.value?.length <= maxLength) {
        return null;
      } else {
        return {
          lengthRange: `the length of the value should be <= ${maxLength} and >= ${minLength}.`,
          actual: control.value
        };
      }
    }
  }

}
