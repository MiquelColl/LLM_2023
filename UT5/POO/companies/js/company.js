import { Employee } from "./employee.js";

export class Company{

    constructor(id, first_name, web, email){
        this.id=id;
        this.first_name=first_name;
        this.web=web;
        this.email=email;
        this.employees=employees;
    }

    render(){
        let employeesHTML="";
        this.employees.forEach(emp => {
            employeesHTML=emp.render()
        });
        return `
            <div>${this.id}</div>
            <div>${this.first_name}</div>
            <div>${this.web}</div>
            <div>${this.email}</div>
            <div>${employeesHTML}}</div>
        `
    }

}