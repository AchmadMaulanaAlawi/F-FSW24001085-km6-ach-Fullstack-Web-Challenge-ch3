const carsUsecase = require("../useCase/cars")

exports.getCars = (req, res) => {
  const { driver, date, time, capacity } = req.query

  // call the usecase
  const data = carsUsecase.getCars(driver, date, time, capacity)
  const message = data.length
    ? null
    : "Data mobil tidak ditemukan, cobalah dengan filter lain"

  const response = {
    data,
    message,
  }

  res.status(200).json(response)
}
