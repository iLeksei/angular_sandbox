import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {DateTime} from "luxon";

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

  static condition(form: FormGroup, condition: string | undefined): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || !condition) { return null }
      console.log(control.value, Date.parse(control.value))
      condition = condition.replace("value",
        DateTime.fromFormat(control.value, "yyyy-MM-dd", {locale: "ru_RU"})
          .set({hour: 23, minute: 59, second: 59})
          .toMillis() + "")
        .replace("currentDate", Date.now() + "");
      console.log(condition);
      const fn = new Function("return " + condition);
      console.log("result: " + fn());
      const result = fn();
      if (!result) {
        return { dateRange: `${condition}`, actual: control.value }
      }
      return null;
    }
  }

}
