const data = (axes, monthData) => {
  console.log('dddd', monthData);
  return {
    // labels: [
    // 'janeiro',
    // 'fevereiro',
    // 'março',
    // 'abril',
    // 'maio',
    // 'junho',
    // 'julho',
    // 'agosto',
    // 'setembro',
    // 'outubro',
    // 'novembro',
    // 'dezembro',
    // 's1', 's2', 's3', 's4', 's5'
    // ], // Logica para filtrar os meses com vendas do ano selecionado
    labels: axes,
    datasets: [
      // {
      //   label: 'Este mês',
      //   data: {  s1: 5, s2: 15, s3: 51, s4: 23 }, // valor total de vendas de cada mês do ano selecionado
      //   // data: [{x: 'Jan', y: 20}, {x: 'Mar', y: 10}, {x: 'Jan', y: 110}], // valor total de vendas de cada mês do ano selecionado
      //   fill: false,
      //   backgroundColor: ['rgba(255, 99, 132, 0.2)'],
      //   pointRadius: 10, // Tamanho da bolinha
      //   borderColor: [
      //     // Aqui é as cores das bolinhas
      //     'rgba(255, 99, 132, 1)', // Uma molinha
      //     'rgba(25, 99, 132, 1)', // Outra bolinha
      //     'green', // Outra bolinha
      //   ],
      //   borderWidth: 4,
      // },
      {
        label: 'Mês atual',
        data: monthData, // Mse selecionado
        // data: [1,22,33,43,2,24,25,55,6,77,8, 13, 110], // valor total de vendas de cada mês do ano selecionado
        fill: true,
        lineTension: 0.5,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        pointRadius: 10, // Anola as outras bolinhas
        // borderColor: [
        //   // Aqui é as cores das bolinhas
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(25, 99, 132, 1)',
        // ],
        borderWidth: 4,
      },
      {
        label: 'ano ',
        data: { '01': 360, '02': 185, '03': 51, '04': 360, '05': 303 }, // Todos os meses e totais de vendas
        // data:  [20, 90, 153, 10, 3, 14, 33], // valor total de vendas de cada mês do ano selecionado
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
};

export default data;
