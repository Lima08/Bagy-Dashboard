const DATA = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Logica para filtrar os meses com vendas do ano selecionado
  datasets: [
    {
      label: 'Este mês',
      data: { Mar: 15, Apr: 5 }, // valor total de vendas de cada mês do ano selecionado
      // data: [{x: 'Jan', y: 20}, {x: 'Mar', y: 10}, {x: 'Jan', y: 110}], // valor total de vendas de cada mês do ano selecionado
      fill: false,
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      pointRadius: 10, // Tamanho da bolinha
      borderColor: [
        // Aqui é as cores das bolinhas
        'rgba(255, 99, 132, 1)', // Uma molinha
        'rgba(25, 99, 132, 1)', // Outra bolinha 
        'green', // Outra bolinha 
      ],
      borderWidth: 0,
    },
    {
      label: 'Mês passado',
      data: { Jan: 10, Feb: 20, Mar: 15, Apr: 5, May: 35 }, // valor total de vendas de cada mês do ano selecionado
      // data: [{x: 'Jan', y: 20}, {x: 'Mar', y: 10}, {x: 'Jan', y: 110}], // valor total de vendas de cada mês do ano selecionado
      fill: true,
      lineTension: 0.5,
      backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      pointRadius: 0, // Anola as outras bolinhas
      // borderColor: [
      //   // Aqui é as cores das bolinhas
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(25, 99, 132, 1)',
      // ],
      borderWidth: 4,
    },
  ],
};

export default DATA;
