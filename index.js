// Code your solution in this file!
function logDriverNames(driverArray) {
  driverArray.forEach (function(driver){
    console.log(driver.name);
  })
}

function logDriversByHometown(driverArray, location) {
  driverArray.forEach (function(driver, location){
    if driver.hometown === location (
      console.log(driver.name);
    )
  })
}