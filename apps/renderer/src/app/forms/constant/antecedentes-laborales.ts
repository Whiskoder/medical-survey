import { FormData } from '../interfaces/field.interface';

export const antecedentesLaborales: FormData = {
  title: 'Antecedentes laborales',
  description: 'Coloque los últimos 3 empleos donde haya durado MÁS de 6 meses',
  fields: [
    {
      label: 'En donde trabajo',
      key: 'workPlace',
      type: 'text',
      cols: 4,
    },
    {
      label: 'Cuanto tiempo trabajo',
      key: 'workTime',
      type: 'select',
      options: [
        { label: '6 meses', value: 'sixMonths' },
        { label: '1 año', value: 'oneYear' },
        { label: '2 años', value: 'twoYears' },
        { label: '3 años', value: 'threeYears' },
        { label: 'Más de 5 años', value: 'moreThanThreeYears' },
      ],
      cols: 2,
    },
    {
      label: 'Especifique sus funciones',
      key: 'workFunctions',
      type: 'text',
      cols: 6,
    },
    {
      label: 'Equipo de protección utilizado',
      key: 'workProtectionEquipment',
      type: 'text',
      cols: 6,
    },
    {
      label: 'Tuvo incapacidades, accidentes de trabajo o de trayecto',
      key: 'workAccidents',
      type: 'text',
      cols: 6,
    },
    {
      label:
        'Seleccione si tuvo exposición a los siguientes factores de riesgo en este empleo',
      key: 'workRisks',
      type: 'multiSelect',
      options: [
        { label: 'Polvo', value: 'dust' },
        {
          label: 'Solventes (thinner, éter, óxido, acetona, etc.)',
          value: 'solvents',
        },
        { label: 'Pinturas', value: 'paint' },
        { label: 'Temperaturas muy altas', value: 'highTemperature' },
        { label: 'Temperaturas bajas', value: 'lowTemperature' },
        {
          label: 'Quimicos (hipoclorito, jabón, quita grasa, sosa, etc)',
          value: 'chemical',
        },
        { label: 'Cargas pesadas', value: 'heavyLoad' },
        {
          label: 'Estar en la misma posicion (parado o sentado)',
          value: 'samePosition',
        },
        { label: 'Movimientos de repetición', value: 'repetitiveMovement' },
        { label: 'Ruido', value: 'noise' },
      ],
      cols: 6,
    },
    {
      label: 'Otro',
      key: 'workOtherExposure',
      type: 'text',
      cols: 6,
    },
  ],
};
