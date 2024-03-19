const carsRepo = require("../../repository/cars")

exports.getCars = (driver, date, time, capacity) => {
  const data = carsRepo.getCars(driver, date, time, capacity)
  return data
}
