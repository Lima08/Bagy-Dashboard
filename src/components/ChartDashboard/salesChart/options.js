const options = (month, year) => ({
  plugins: {
    title: {
      display: true,
      align: 'start',
      color: 'rgb(82, 82, 82)',
      text: 'Total faturamento mensal',
      padding: {
        top: 10,
      },
      font: {
        size: 34,
      },
    },
    subtitle: {
      display: true,
      text: `${month} - ${year}`,
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
      fullSize: false,
      align: 'end',
      labels: {
        boxHeight: 0,
        color: 'rgb(150, 150, 150)',
        font: {
          size: 14,
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
      display: true,
    },
  },
});

export default options;
