const express = require("express");
const EmployeeController = require("../controllers/EmployeeController");
const router = express.Router();

router.post('/add-employee',EmployeeController.addEmployee)
router.get('/get-employee',EmployeeController.getEmployee)

module.exports = router