export function filterOrdersByYear(data, year) {
  const allYearOrders = data.filter((order) => {
    return order.createdAt.split('-')[0] === year;
  });
  return allYearOrders;
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
  const onlyValues = Object.values(dataOrderValuesPerDay).map((day) => {
    return day
  })

  return onlyValues;
}
