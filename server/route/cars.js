const express = require("express")
const router = express.Router()
const carsController = require("../controller/cars")

/* Add routes */
router.get("/", carsController.getCars) // /students

module.exports = router
