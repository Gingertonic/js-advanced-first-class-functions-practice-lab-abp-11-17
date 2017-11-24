// Code your solution in this file!
function logDriverNames(driverArray) {
  driverArray.forEach (function(driver){
    console.log(driver.name);
  })
}

// function logDriversByHometown(driverArray, location) {
//   driverArray.forEach (function(driver){
//     if driver.hometown === location
//       console.log(driver.name);
//     )
//   })
// }

function logDriversByHometown(driverArray, location) {
  const self = this
  driverArray.forEach (function(this.driver, this.location){
    if this.hometown === location
      console.log(this.name);
    )
  })
}
