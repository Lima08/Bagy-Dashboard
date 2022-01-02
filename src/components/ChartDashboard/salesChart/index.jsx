import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesChart() {
  const options = {
    scales: {
      y: {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: true,
        },
      },
      x: {
        display: false,
        grid: {
          drawOnChartArea: true,
        },
      },
    },
  };

  const data = {
    // o ponto no grafico com o valor vai ser o dia
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Aqui vai ser todos os meses
    datasets: [
      {
        label: false,
        data: [33, 53, 85, 41, 44, 65], // valor total de vendas de cada mês
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(252,60,141,0.1)',
        borderColor: 'rgba(252,60,141)',
        yAxisID: 'y',
        xAxisID: 'x',
      },
      {
        label: 'Este mês',
        data: [null, null, 71, null, null, null ], // valor total de vendas do mes do filtro
        borderColor: 'rgba(352,30,141)',
        borderWidth: 10,
      },
      {
        label: 'Mês passado',
        data: [null, null, null, 71, null, null ], // valor total de vendas mes anterior ao filtro
        borderColor: 'rgba(152,30,141)',
        borderWidth: 10,
      },
    ],
  };

  return (
    <div className='chart'>
      <Line options={options} data={data} />
    </div>
  );
}

export default SalesChart;
