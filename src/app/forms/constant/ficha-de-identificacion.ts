import { Field } from '../interfaces/field.interface';

export const fichaDeIdentificacion: Field[] = [
  {
    type: 'text',
    label: 'Nombres',
    key: 'name',
  },
  {
    type: 'text',
    label: 'Apellido paterno',
    key: 'fatherName',
  },
  {
    type: 'text',
    label: 'Apellido materno',
    key: 'motherName',
  },
  {
    type: 'number',
    label: 'Edad',
    key: 'age',
    min: 0,
    max: 120,
    step: 1,
  },
  {
    type: 'select',
    label: 'Sexo',
    key: 'sex',
    options: [
      { label: 'Masculino', value: 'M' },
      { label: 'Femenino', value: 'F' },
    ],
  },
  {
    label: 'Estado civil',
    key: 'civilState',
    type: 'select',
    options: [
      { label: 'Soltero', value: 'S' },
      { label: 'Casado', value: 'C' },
      { label: 'Divorciado', value: 'D' },
      { label: 'Viudo', value: 'V' },
      { label: 'Separado', value: 'E' },
    ],
  },
  {
    label: 'Lugar de nacimiento',
    key: 'placeOfBirth',
    type: 'text',
  },
  {
    label: 'Fecha de nacimiento',
    key: 'dateOfBirth',
    type: 'date',
  },
  {
    label: 'Escolaridad',
    key: 'schooling',
    type: 'select',
    options: [],
  },
  {
    label: 'Religión',
    key: 'religion',
    type: 'text',
  },
  {
    label: 'Domicilio',
    key: 'address',
    type: 'text',
  },
  {
    label: 'Teléfono',
    key: 'phone',
    type: 'text',
  },
  {
    label: 'Nombre del contacto de emergencia',
    key: 'emergencyContactName',
    type: 'text',
  },
  {
    label: 'Numero de contacto de emergencia',
    key: 'emergencyContactNumber',
    type: 'text',
  },
  {
    label: 'Grupo sanguíneo',
    key: 'bloodGroup',
    type: 'select',
    options: [
      { label: 'A+', value: 'A+' },
      { label: 'A-', value: 'A-' },
      { label: 'B+', value: 'B+' },
      { label: 'B-', value: 'B-' },
      { label: 'AB+', value: 'AB+' },
      { label: 'AB-', value: 'AB-' },
      { label: 'O+', value: 'O+' },
      { label: 'O-', value: 'O-' },
    ],
  },
];
