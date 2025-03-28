import { FormData } from '../interfaces/field.interface';
export const antecedentesPersonalesNoPatologicos: FormData = {
  title: 'Antecedentes personales no patológicos',
  fields: [
    {
      label: 'Vivienda',
      key: 'housing',
      type: 'selectButton',
      options: [
        { label: 'Propia', value: 'own' },
        { label: 'Rentada', value: 'rented' },
      ],
      cols: 2,
    },
    {
      label: 'Tipo',
      key: 'housingType',
      type: 'selectButton',
      options: [
        { label: 'Urbana', value: 'urban' },
        { label: 'Rural', value: 'rural' },
      ],
      cols: 2,
    },
    {
      label: 'Su casa cuenta con agua, gas, luz y drenaje',
      key: 'housingServices',
      type: 'boolean',
      cols: 2,
    },
    {
      label: 'El material de su piso es',
      key: 'floorMaterial',
      type: 'selectButton',
      options: [
        { label: 'Tierra', value: 'land' },
        { label: 'Otro', value: 'other' },
      ],
      cols: 2,
    },
    {
      label: 'El material de su techo es',
      key: 'ceilingMaterial',
      type: 'selectButton',
      options: [
        { label: 'Lamina', value: 'slate' },
        { label: 'Otro', value: 'other' },
      ],
      cols: 4,
    },
    {
      label: 'Tiene mascotas',
      key: 'hasPets',
      type: 'boolean',
      cols: 2,
    },
    {
      label: '¿Hace cuanto esta desparacida?',
      key: 'petsDemorwedTime',
      type: 'select',
      options: [
        { label: 'No', value: 'no' },
        { label: 'Hace menos de 1 mes', value: 'lessThan1Month' },
        { label: 'Hace 1 mes', value: 'oneMonth' },
        { label: 'Hace 3 meses', value: 'threeMonths' },
        { label: 'Hace 6 meses', value: 'sixMonths' },
        { label: 'Hace 1 año', value: 'oneYear' },
        { label: 'Hace más de 1 año', value: 'moreThanOneYear' },
      ],
      cols: 4,
    },
    {
      label: 'Cada cuanto se baña',
      key: 'showerFrequency',
      type: 'select',
      options: [
        { label: 'Más de una vez al día', value: 'moreThanOnceADay' },
        { label: 'Diario', value: 'daily' },
        { label: 'Cada 2 días', value: 'everyTwoDays' },
        { label: 'Cada semana', value: 'weekly' },
        { label: 'Cada 15 días', value: 'biweekly' },
        { label: 'Cada mes', value: 'monthly' },
        { label: 'Menos de 1 año', value: 'lessThanOneYear' },
      ],
      cols: 3,
    },
    {
      label: 'Cada cuanto hace cambio de ropa interior y exterior',
      key: 'clothingChangeFrequency',
      type: 'select',
      options: [
        { label: 'Más de una vez al día', value: 'moreThanOnceADay' },
        { label: 'Diario', value: 'daily' },
        { label: 'Cada 2 días', value: 'everyTwoDays' },
        { label: 'Cada semana', value: 'weekly' },
        { label: 'Cada 15 días', value: 'biweekly' },
        { label: 'Cada mes', value: 'monthly' },
        { label: 'Menos de 1 año', value: 'lessThanOneYear' },
      ],
      cols: 3,
    },
    {
      label: 'Cuantas veces al dia se lava los dientes',
      key: 'toothbrushUseFrequency',
      type: 'select',
      options: [
        { label: 'Más de 3 veces al día', value: 'moreThanThreeTimesADay' },
        { label: '3 veces al día', value: 'threeTimesADay' },
        { label: '2 veces al día', value: 'twiceADay' },
        { label: '1 vez al día', value: 'onceADay' },
        { label: 'Menos de 1 vez al día', value: 'lessThanOnceADay' },
        { label: 'Menos de 1 año', value: 'lessThanOneYear' },
      ],
      cols: 3,
    },
    {
      label: 'En que momento se lava las manos (Mencione dos ejemplos)',
      key: 'handwashing',
      type: 'text',
      cols: 3,
    },
    {
      label: '¿Tuvo exposición a humo de leña en algún momento de su vida?',
      key: 'hadSwallowedFluids',
      type: 'boolean',
      cols: 3,
    },
  ],
};
