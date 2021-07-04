import { AbstractControl } from "@angular/forms";



export function range(min: number, max: number) {
    return function (control: AbstractControl) {
        let value = control.value;
        if (value >= min && value < max)
            return null;
        else
            return { range: true }
    }
}