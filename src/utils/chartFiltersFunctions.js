export function filterConsolidatedOrdersByYear(data, year) {
  const allYearOrders = data.filter((order) => {
    return order.createdAt.split('-')[0] === year;
  });

  return allYearOrders;
}

export function filterUniqueMonth(data) {
  const allMonths = data.map((order) => {
    return order.createdAt.split('-')[1];
  });

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueMonths = allMonths.filter(unique).sort((a, b) => a - b);
  return uniqueMonths;
}

export function filterConsolidatedOrdersByMonth(data, month) {
  const allMonthOrders = data.filter((order) => {
    return order.createdAt.split('-')[1] === month;
  });
  return allMonthOrders;
}

export function filterAndDefineTotalOrder(data, month, year) {
  if (data.length === 0) return 0;

  const allYearOrders = filterConsolidatedOrdersByYear(data, year);
  const allMonthrders = filterConsolidatedOrdersByMonth(allYearOrders, month);
  const totalConsolidatedOrders = allMonthrders.reduce(
    (acc, cur) => cur.price + acc,
    0
  );

  return totalConsolidatedOrders;
}

