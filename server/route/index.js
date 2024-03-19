const express = require("express")
const router = express.Router()
const carsRoute = require("./cars")

router.use("/cars", carsRoute)

module.exports = router
