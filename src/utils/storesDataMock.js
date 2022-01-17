const getConsolidatedOrders = [
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-11',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-12',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-13',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-14',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-15',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-16',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 140,
    createdAt: '2021-12-17',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 100,
        quantity: 1,
      },
      {
        productName: 'produto 3',
        unitPrice: 1,
        quantity: 40,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-18',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-19',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-10',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-11',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-12',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-13',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-14',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-15',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-17',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-19',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-20',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 140,
    createdAt: '2021-12-21',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 100,
        quantity: 1,
      },
      {
        productName: 'produto 3',
        unitPrice: 1,
        quantity: 40,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-22',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-23',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-12-24',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-12-25',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-12-26',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-01-11',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-01-12',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-01-13',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-01-14',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-01-15',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-01-16',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 140,
    createdAt: '2021-01-17',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 100,
        quantity: 1,
      },
      {
        productName: 'produto 3',
        unitPrice: 1,
        quantity: 40,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-01-18',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-01-19',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 230,
    createdAt: '2021-01-10',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 1360,
    createdAt: '2021-01-11',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 680,
    createdAt: '2021-01-12',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 740,
    createdAt: '2021-01-13',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 360,
    createdAt: '2021-01-14',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 470,
    createdAt: '2021-11-15',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 785,
    createdAt: '2021-11-17',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 340,
    createdAt: '2021-11-19',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 480,
    createdAt: '2021-11-20',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 140,
    createdAt: '2021-11-21',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 180,
        quantity: 1,
      },
      {
        productName: 'produto 3',
        unitPrice: 1,
        quantity: 40,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 30,
    createdAt: '2021-11-22',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 680,
    createdAt: '2021-11-23',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 240,
    createdAt: '2021-11-24',
    products: [
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 11,
    price: 350,
    createdAt: '2021-11-25',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
  {
    consolidatedOrderId: 10,
    price: 80,
    createdAt: '2021-11-26',
    products: [
      {
        productName: 'produto 1',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 2',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
      {
        productName: 'produto 3',
        unitPrice: 12,
        quantity: 10,
      },
    ],
  },
];

export default getConsolidatedOrders;
