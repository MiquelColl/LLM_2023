import { Company } from "./company.js";
import { Employee } from "./employee.js";
const container = document.querySelector('#company-container')

function init() {
    getCompany()
}
init()

function getCompany() {
    fetch("./data/company.json")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(com => {

            const employeesList = [];
            com.employees.forEach(emp => {
                const empObj = new Employee(emp.id, emp.first_name, emp.last_name, emp.salary);
                employeesList.push(empObj);
            })

            const company = new Company(com.id, com.name, com.web, com.email ,employeesList);
            container.innerHTML+=company.render();
        });
    });
}