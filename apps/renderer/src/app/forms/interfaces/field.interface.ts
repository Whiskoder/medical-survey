import { ValidatorFn } from '@angular/forms';

export interface FormData {
  fields: Field[];
  description?: string;
  title: string;
}
export interface Field {
  type: FieldType;
  cols: number;
  label: string;
  key: string;
  min?: number;
  max?: number;
  minDate?: Date;
  maxDate?: Date;
  step?: number;
  options?: FieldOptions[];
  validators?: ValidatorFn[];
}

export type FieldType =
  | 'text'
  | 'number'
  | 'select'
  | 'date'
  | 'phone'
  | 'boolean'
  | 'selectButton'
  | 'multiSelect';

export interface FieldOptions {
  label: string;
  value: string;
}
