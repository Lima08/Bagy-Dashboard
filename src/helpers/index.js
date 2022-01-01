function filterConsolidatedOrdersByYear(data, year) {
  const allYearOrders = data.filter((order) => {
    return order.createdAt.split('-')[0] === year;
  });

  return allYearOrders;
}

function filterConsolidatedOrdersByMonth(data, month) {
  const allMonthOrders = data.filter((order) => {
    return order.createdAt.split('-')[1] === month;
  });
  return allMonthOrders;
}

function filterAndDefineTotalOrder(data, month, year) {
  if (data.length === 0) return 0;
  console.log(data);
  const allYearOrders = filterConsolidatedOrdersByYear(data, year);
  console.log(allYearOrders);
  const allMonthrders = filterConsolidatedOrdersByMonth(allYearOrders, month);
  console.log(allMonthrders);
  const totalConsolidatedOrders = allMonthrders.reduce(
    (acc, cur) => cur.price + acc,
    0
  );

  console.log(totalConsolidatedOrders);
  return totalConsolidatedOrders;
}

export default filterAndDefineTotalOrder;
