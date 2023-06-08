const client = require('../../elasticsearch/client')
const EmployeeModel = require('../models/EmployeeModel')
const EmployeeList = require('../resources/employee.json')

const EmployeeController =  {
    addEmployee: async (req,res) => {
        try{
            let employee = await EmployeeModel.insertMany(EmployeeList)
            res.status(200).send({
                status: true,
                message: "employees added successfully",
                employee
            })
        } catch(error){
            res.status(500).send({
                status: false,
                message: "server error",
                error
            })
        }
    },
    getEmployee: async (req,res) => {
        try{
            let employee = await client.search({
                index: "search-elastic-search-employee",
                query: { match: {company_name: req.query.company}},
                size: 10000
            })
            console.log(req.query);
            res.status(200).send({
                status: true,
                message: "search successful",
                employee
            })
        } catch(error){
            res.status(500).send({
              status: false,
              message: "server error",
              error,
            });
        }
    }
}

module.exports = EmployeeController;