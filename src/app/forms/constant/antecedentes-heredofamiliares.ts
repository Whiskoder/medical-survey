import { FormData } from '../interfaces/field.interface';

export const antecedentesHeredofamiliares: FormData = {
  title: 'Antecedentes heredofamiliares',
  description:
    'Marca si alguno de tus familiares como: padres, abuelos, tíos o primos ha padecido padece alguna de las siguientes enfermedades.',
  fields: [
    {
      type: 'boolean',
      label: 'Diabetes (azúcar alta)',
      key: 'diabetes',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Hipertensión (presión alta)',
      key: 'hypertension',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Colesterol alto',
      key: 'highCholesterol',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Triglicéridos alto',
      key: 'highTriglycerides',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Cáncer',
      key: 'cancer',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Artritis (enfermedades de los huesos)',
      key: 'arthritis',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Tuberculosis',
      key: 'tuberculosis',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Epilepsia (convulsiones)',
      key: 'epilepsy',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Enfermedades del riñón',
      key: 'kidneyDiseases',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Enfermedades del corazón',
      key: 'heartDiseases',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Enfermedades del pulmón',
      key: 'lungDiseases',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Enfermedades mentales',
      key: 'mentalDiseases',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Problemas de tiroides',
      key: 'thyroidIssues',
      cols: 3,
    },
    {
      type: 'boolean',
      label: 'Hepatitis',
      key: 'hepatitis',
      cols: 3,
    },
  ],
};
