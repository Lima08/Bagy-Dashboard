export function filterOrdersByYear(data, year) {
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

  const allYearOrders = filterOrdersByYear(data, year);
  const allMonthrders = filterConsolidatedOrdersByMonth(allYearOrders, month);
  const totalConsolidatedOrders = allMonthrders.reduce(
    (acc, cur) => cur.price + acc,
    0
  );

  return totalConsolidatedOrders;
}

export function filterOrdersByMonth(SalesYear, month) {
  const allMonthOrders = SalesYear.filter((order) => {
    return order.createdAt.split('-')[1] === month;
  });

  const arrayOrderMonth = allMonthOrders.map((order) => ({
    [order.createdAt.split('-')[2]]: order.price,
  }));

  const valueOrderMonth = arrayOrderMonth.reduce((acc, cur) => {
    if (acc[Object.keys(cur)[0]]) {
      acc[Object.keys(cur)[0]] =
        acc[Object.keys(cur)[0]] + cur[Object.keys(cur)[0]];
      return acc;
    }
    acc[Object.keys(cur)[0]] = cur[Object.keys(cur)[0]];
    return acc;
  }, {});

  return valueOrderMonth;
}

export function totalOrderPerDay(days, OrderMonth) {
  const allDaysOrders = days.map((day) => ({ [day]: 0 }));

  const totalOrderPerDay = allDaysOrders.reduce((acc, cur) => {
    if (OrderMonth[Object.keys(cur)[0]]) {
      acc[Object.keys(cur)[0]] =
        cur[Object.keys(cur)[0]] + OrderMonth[Object.keys(cur)[0]];
      return acc;
    }

    acc[Object.keys(cur)[0]] = 0;
    return acc;
  }, {});

  return totalOrderPerDay;
}

export function chartValuesMaker(days, data, year, month) {
  const allOrderYear = filterOrdersByYear(data, year);
  const allOrdersMonth = filterOrdersByMonth(allOrderYear, month);
  const dataOrderValuesPerDay = totalOrderPerDay(days, allOrdersMonth);
  const onlyValues = Object.values(dataOrderValuesPerDay);

  return onlyValues;
}
