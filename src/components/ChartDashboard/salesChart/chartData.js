const data = (axes, monthData, totalSalesYear) => {
  return {
    labels: axes,
    datasets: [
      {
        label: 'Mês atual',
        data: monthData,
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 10,
        borderWidth: 4,
      },
      {
        label: 'ano ',
        data: totalSalesYear,
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  };
};

export default data;
