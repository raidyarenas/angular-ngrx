import {AbstractControl, FormControl} from "@angular/forms";

const MESSAGES_ERRORS = {
  required: 'This field is required',
  email: 'This email is invalid',
  only_characters: 'Only characters',
  only_numbers: 'Only Numbers',
  date: 'Date invalid'
}

export const PATTERNS = {
  only_characters: '^([a-zA-Záéíóúñ ]+)$',
  only_numbers: '^([0-9]+)$',
  date: '^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})$'
}

export class Helpers {
  static getMessageError(formControl: AbstractControl) {
    if (formControl.hasError('required'))
      return MESSAGES_ERRORS.required;
    if (formControl.hasError('email'))
      return MESSAGES_ERRORS.email;
    if(formControl.hasError("pattern")) {
      const {requiredPattern} = formControl.errors.pattern;
      if (requiredPattern == PATTERNS.only_characters)
        return MESSAGES_ERRORS.only_characters;
      if (requiredPattern == PATTERNS.only_numbers)
        return MESSAGES_ERRORS.only_numbers;
      if (requiredPattern == PATTERNS.date)
        return MESSAGES_ERRORS.date;
    }
    else
      return '';
  }

}

