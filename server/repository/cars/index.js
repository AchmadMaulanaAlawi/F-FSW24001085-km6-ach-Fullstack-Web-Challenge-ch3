let cars = require("../../data/cars.json")

exports.getCars = (driver, date, time, capacity) => {
  let data = cars.map((car) => car)

  const filteredCars = []

  if (driver.length && date.length && time.length) {
    data = cars.map((car) => {
      if (
        driver === car.driver_type &&
        date === car.available_at &&
        time <= car.time &&
        parseInt(capacity) <= car.capacity
      ) {
        filteredCars.push(car)
      }
    })
    return filteredCars
  } else {
    return data
  }

  //   data = data.filter((student) => {
  //     let filteredStatus = true
  //     if (name) {
  //       filteredStatus =
  //         filteredStatus &&
  //         student.name.toLowerCase().includes(name?.toLowerCase())
  //     }
  //     if (city) {
  //       filteredStatus =
  //         filteredStatus &&
  //         student.address.city.toLowerCase().includes(city?.toLowerCase())
  //     }
  //     if (province) {
  //       filteredStatus =
  //         filteredStatus &&
  //         student.address.province.toLowerCase().includes(province?.toLowerCase())
  //     }

  //     return filteredStatus
  //   })
}
