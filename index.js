// Code your solution in this file!
function logDriverNames(driverArray) {
  driverArray.forEach (function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  const sortByRevenue = [...drivers];
  sortByRevenue.revenue.sort(function(a, b){return a-b});
  return sortByRevenue;
}
