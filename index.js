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
  sortByRevenue.sort(function(a,b){
    return a.revenue - b.revenue
  });
  return sortByRevenue;
}

const driversByName = function(drivers){
  const sortByName = [...drivers];
  sortByName.sort((function(a, b){
    var a = a.name
    var b = b.name
    sort((a, b) => a.localeCompare(b))
    ))
  return sortByName;
}