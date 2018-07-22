// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(printName);
}

const printName = function(driver) {
  console.log(driver.name);
}

function logDriversByHometown(drivers, town) {
  const matching = drivers.filter(driver => driver.hometown === town);
  matching.forEach(printName);
}

const revenueSorter = function(x, y) {
  return x.revenue - y.revenue;
}

function driversByRevenue(drivers) {
  sorted = [...drivers].sort(revenueSorter);
  return sorted;
}

function driversByName(drivers) {
  sorted = [...drivers].sort(sortByName);
  return sorted;
}

const sortByName = function(a, b) {
  return a.name.localeCompare(b.name);
}

const reduceRevenues = function (agg, el, i, arr) {
  return agg + el.revenue;
}

function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenues, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
