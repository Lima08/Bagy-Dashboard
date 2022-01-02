const data = (axes, monthData, totalSalesYear) => {
  console.log('totalSalesYear', totalSalesYear)
  return {
    labels: axes,
    datasets: [
      {
        label: 'Mês atual',
        data: monthData, // Mes selecionado
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 10, // Anola as outras bolinhas
        borderWidth: 4,
      },
      {
        label: 'ano ',
        data: totalSalesYear, // Todos os meses e totais de vendas
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 0, // Anola as outras bolinhas
        borderWidth: 4,
      },
    ],
  };
};

export default data;
