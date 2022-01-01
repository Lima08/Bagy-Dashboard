function filterConsolidatedOrdersByYear(data, year) {
  const allYearOrders = data.filter(
    (order) => order.createdAt.split('-')[0] === year
  );
  return allYearOrders;
}

function filterConsolidatedOrdersByMonth(data, month) {
  const allMonthOrders = data.filter((order) => {
    console.log('filterConsolidatedOrdersByMonth helper ====>', order.createdAt.split('-')[1], month)
    return order.createdAt.split('-')[1] === month
  }
  );
  return allMonthOrders;
}

function filterAndDefineTotalOrder(data, month, year) {
  console.log('filterAndDefineTotalOrder -->', data);

  if (data.length === 0) return;

  const allYearOrders = filterConsolidatedOrdersByYear(data, year);
  console.log('filterAndDefineTotalOrder passou', allYearOrders);
  const allMonthrders = filterConsolidatedOrdersByMonth(allYearOrders, month);
  const totalConsolidatedOrders = allMonthrders.reduce(
    (acc, cur) => cur.price + acc,
    0
  );

  console.log('resultado -->', totalConsolidatedOrders);

  return totalConsolidatedOrders;
}

export default filterAndDefineTotalOrder;
