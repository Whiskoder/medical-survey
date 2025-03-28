export interface Field {
  type: FieldType;
  label: string;
  key: string;
  min?: number;
  max?: number;
  step?: number;
  options?: FieldOptions[];
}

export type FieldType = 'text' | 'number' | 'select' | 'date';

export interface FieldOptions {
  label: string;
  value: string;
}
