import React from 'react';
import { Line } from 'react-chartjs-2';

function SalesChart() {

  const options = {
    scales: {
      y: {
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        }
      }
    }
  };

  const data = {
    
    // o ponto no grafico com o valor vai ser o dia
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Aqui vai ser todos os meses
    datasets: [
      {
        label: 'Este mês',
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(252,60,141,0.1)',
        borderColor: 'rgba(252,60,141)',
        yAxisID: 'y',
      },
      {
        label: 'Mês passado',
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        lineTension: 0.5,
        borderColor: '#742774',
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
