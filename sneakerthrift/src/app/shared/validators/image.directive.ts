import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { imageValidator } from '../utils/image-validator';

@Directive({
  selector: '[appImage]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ImageDirective,
      multi: true,
    }
  ]
})
export class ImageDirective implements Validator {
  @Input() appImage: any;
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validatorFn=imageValidator();
    return validatorFn(control)
  }
}
