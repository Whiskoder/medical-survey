import { Validators } from '@angular/forms';
import { FormData } from '../interfaces/field.interface';

export const fichaDeIdentificacion: FormData = {
  title: 'Ficha de identificación',
  description: 'Datos personales de la persona que realiza la evaluación',
  fields: [
    {
      type: 'text',
      label: 'Nombres',
      key: 'name',
      validators: [Validators.required, Validators.maxLength(50)],
      cols: 6,
    },
    {
      type: 'text',
      label: 'Apellido paterno',
      key: 'fatherName',
      validators: [Validators.required, Validators.maxLength(50)],
      cols: 3,
    },
    {
      type: 'text',
      label: 'Apellido materno',
      key: 'motherName',
      validators: [Validators.required, Validators.maxLength(50)],
      cols: 3,
    },
    {
      type: 'select',
      label: 'Sexo',
      key: 'sex',
      options: [
        { label: 'Masculino', value: 'male' },
        { label: 'Femenino', value: 'female' },
      ],
      cols: 3,
    },
    {
      label: 'Estado civil',
      key: 'civilState',
      type: 'select',
      options: [
        { label: 'Soltero(a)', value: 'single' },
        { label: 'Casado(a)', value: 'married' },
        { label: 'Unión libre', value: 'cohabiting' },
        { label: 'Divorciado(a)', value: 'divorced' },
        { label: 'Viudo(a)', value: 'widowed' },
        { label: 'Separado(a)', value: 'separated' },
      ],
      cols: 3,
    },
    {
      label: 'Lugar de nacimiento',
      key: 'placeOfBirth',
      type: 'text',
      cols: 4,
    },
    {
      label: 'Fecha de nacimiento',
      key: 'dateOfBirth',
      type: 'date',
      // Min age of 20 and max age of 100 years
      maxDate: new Date(new Date().getFullYear() - 20, 0, 1),
      minDate: new Date(new Date().getFullYear() - 100, 0, 1),
      cols: 2,
    },
    {
      label: 'Escolaridad',
      key: 'schooling',
      type: 'select',
      options: [
        {
          label: 'Preparatoria/Bachillerato incompleto',
          value: 'incompleteHighSchool',
        },
        {
          label: 'Preparatoria/Bachillerato completo',
          value: 'completeHighSchool',
        },
        { label: 'Técnico superior universitario', value: 'technicalDegree' },
        { label: 'Licenciatura incompleta', value: 'incompleteBachelor' },
        { label: 'Licenciatura', value: 'completeBachelor' },
        { label: 'Maestría incompleta', value: 'incompleteMaster' },
        { label: 'Maestría', value: 'completeMaster' },
        { label: 'Doctorado incompleto', value: 'incompleteDoctorate' },
        { label: 'Doctorado', value: 'completeDoctorate' },
      ],
      cols: 3,
    },
    {
      label: 'Religión',
      key: 'religion',
      type: 'text',
      cols: 3,
    },
    {
      label: 'Domicilio',
      key: 'address',
      type: 'text',
      cols: 4,
    },
    {
      label: 'Teléfono',
      key: 'phone',
      type: 'phone',
      cols: 2,
    },
    {
      label: 'Nombre del contacto de emergencia',
      key: 'emergencyContactName',
      type: 'text',
      cols: 4,
    },
    {
      label: 'Numero de contacto de emergencia',
      key: 'emergencyContactNumber',
      type: 'phone',
      cols: 2,
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
      cols: 2,
    },
  ],
};
