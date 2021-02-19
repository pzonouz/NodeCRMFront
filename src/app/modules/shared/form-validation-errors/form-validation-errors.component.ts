import { AbstractControl, FormControl, FormControlName, NgControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation-errors',
  templateUrl: './form-validation-errors.component.html',
  styleUrls: ['./form-validation-errors.component.scss'],
})
export class FormValidationErrorsComponent implements OnInit {
  constructor() { }
  @Input() control: AbstractControl;
  getErrors() {
    return this.control.errors && this.control.dirty;
  }
  ngOnInit(): void {

  }
  onInput() {

  }
}
