import { FormGroup, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { MovieScreeningInputValidationMessages } from './validationMessages';
// Generic validator for Reactive forms
// Implemented as a class, not a service, so it can retain state for multiple forms.



export class GenericValidator {

  constructor(private validationMessages: MovieScreeningInputValidationMessages) {

  }

  // Processes each control within a FormGroup
  // And returns a set of validation messages to display
  // Structure
  // controlName1: 'Validation Message.',
  // controlName2: 'Validation Message.'

  processMessages(container: FormGroup): { [key: string]: string } {
    const messages = {};
    for (const controlKey in container.controls) {

      if (container.controls.hasOwnProperty(controlKey)) {

        const c = container.controls[controlKey];
        if (c instanceof FormGroup) {
          const childMessages = this.processMessages(c);
          Object.assign(messages, childMessages);

        // tslint:disable-next-line:align
        } else if (c instanceof FormArray) {

          console.log('processing FormArray: ', c);
          for (let i = 0; i < c.controls.length; i++) {
            if (c.controls[i] instanceof FormGroup) {
              messages[i] = {};
              const arrMsgs = this.processMessages(c.controls[i] as FormGroup);
              Object.assign(messages[i], arrMsgs); // messages object overwritten to {} without this line
            }
          }
        } else {

          // Only validate if there are validation messages for the control
          console.log('processing FormControl: ', c);
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';
            if ((c.dirty || c.touched) && c.errors) {
              Object.keys(c.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                }
              });
            }
          }
        }
      }
    }
    console.log('processing returning', JSON.stringify(messages));
    return messages;
  }

  getErrorCount(container: FormGroup): number {
    let errorCount = 0;
    for (const controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        if (container.controls[controlKey].errors) {
          errorCount += Object.keys(container.controls[controlKey].errors).length;
          console.log(errorCount);
        }
      }
    }
    return errorCount;
  }
}


// export class NumberValidators {
//   static range(min: number, max: number): ValidatorFn {
//     return (c: AbstractControl): { [key: string]: boolean } | null => {
//       if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
//         return { range: true };
//       }
//       return null;
//     };
//   }
//   static range2(min: number, max: number): ValidatorFn {
//     return (c: AbstractControl): { [key: string]: boolean } | null => {
//       if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
//         return { range: true };
//       }
//       return null;
//     };
//   }
// }

export function FlatNumberValidator(c: AbstractControl): { [key: string]: boolean } | null {
  const regex = /^B[1-8][10][1-7][0-6]$/gm;
  if (c.value && (isNaN(c.value) && !regex.test(c.value))) {
    return { flatnumber: true };
  }
  return null;
}

