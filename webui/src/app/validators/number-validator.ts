import { AbstractControl } from '@angular/forms';

export function numberValidator(control: AbstractControl): {
    [key: string]: any
} | null {
    const valid = /^\d+$/.test(control.value);

    return valid ? null : {
        invalidAge: {
            valid: false,
            value: control.value
        }
    };
}
