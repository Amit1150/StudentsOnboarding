import { AbstractControl, ValidationErrors } from '@angular/forms';

/* validate ngprime dropdown against default value selected.*/
export class CategoryValidator {
    static required(control:AbstractControl) : ValidationErrors | null {
        let value = control.value;
        if(value == '' || (value && +value.id <= 0)){
            return { required : true};
        }
        return null;
    }
}