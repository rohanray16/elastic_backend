const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  sl_no: {type: Number, default: 0},
  company_name: {type: String, default: "NA"},
  employee_name: {type: String, default: "NA"},
  description: {type: String, default: "none"},
  leave: {type: Number, default: 0},
});

const EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = EmployeeModel