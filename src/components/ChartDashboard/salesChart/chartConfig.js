import { DAYS } from '../../../utils/dateMock'

const data = (valuePerDay) => {
  return {
    labels: DAYS,
    datasets: [
      {
        label: 'Mês atual',
        data: valuePerDay,
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 0,
        borderWidth: 4,
      },
      {
        label: 'Mês anterior ',
        data: [100,13,458,140,523,255,356],
        fill: false,
        lineTension: 0.5,
        backgroundColor: ['rgba(215, 929, 132)'],
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  };
};

export default data;
