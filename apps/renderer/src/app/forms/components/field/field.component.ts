import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Field, FieldType } from '../../interfaces/field.interface';

@Component({
  selector: 'form-field',
  standalone: false,
  templateUrl: './field.component.html',
})
export class FormsFieldComponent implements OnInit {
  @Input() field: Field | undefined;
  @Input() formGroup: FormGroup | undefined;
  control!: FormControl;
  isRequired: boolean = false;
  booleanSelectButton = [
    { label: 'Si', value: true },
    { label: 'No', value: false },
  ];

  get controlErrors(): string[] {
    const errors = this.control.errors;
    return errors ? Object.keys(errors) : [];
  }

  ngOnInit() {
    const key = this.field?.key ?? '';
    this.control = this.formGroup?.get(key) as FormControl;
  }
}
