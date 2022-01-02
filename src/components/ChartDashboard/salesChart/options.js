const OPTIONS = {
  plugins: {
    title: {
      display: true,
      align: 'start',
      color: 'rgb(82, 82, 82)', // cor texto legenda
      text: 'Total faturamento mensal',
      padding: {
        top: 10,
      },
      font: {
        size: 34, // Da legenda
      },
    },
    subtitle: {
      display: true,
      text: 'Custom Chart Subtitle',
      align: 'start',
      padding: {
        top: 10,
      },
      font: {
        size: 14,
      },
    },

    legend: {
      display: true,
      // position: 'bottom',
      fullSize: false,
      // onClick: ()=> console.log('oii'),
      align: 'end',
      labels: {
        // boxWidth: 220,
        boxHeight: 0,
        color: 'rgb(150, 150, 150)', // cor texto legenda
        font: {
          size: 14, // Da legenda
        },
      },
    },
  },
  layout: {
    padding: {
      right: 40,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: 'right',
      grid: {
        drawOnChartArea: true,
      },
    },
    x: {
      display: false,
    },
  },
};

export default OPTIONS;
