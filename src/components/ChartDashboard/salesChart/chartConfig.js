import { DAYS } from '../../../utils/dateMock'

const data = (valuePerDay) => {
  return {
    labels: DAYS,
    datasets: [
      {
        label: 'Mês atual',
        data: valuePerDay, // valores de vendas por dia do 1 ao 31 - precisa de 31 valores
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 0, // bolinha principal - logica data de hoje const today = new Date().getDate();
        borderWidth: 4,
      },
      // {
      //   label: 'Mês anterior ',
      //   data: [100,13,458,140,523,255,356], // Todos os meses e totais de vendas
      //   fill: false,
      //   lineTension: 0.5,
      //   backgroundColor: ['rgba(215, 929, 132)'],
      //   pointRadius: 0, // tamanho as outras bolinhas
      //   borderWidth: 4,
      // },
    ],
  };
};

export default data;
