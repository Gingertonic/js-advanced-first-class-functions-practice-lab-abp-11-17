// Code your solution in this file!
function logDriverNames(driverArray) {
  driverArray.forEach (function(driver){
    console.log(driver.name);
  })
}

// function logDriversByHometown(driverArray, location) {
//   driverArray.forEach (function(driver){
//     if(driver.hometown === location)
//       console.log(driver.name);
//     )
//   })
// }

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};
