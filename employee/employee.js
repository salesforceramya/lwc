import { LightningElement } from 'lwc';

export default class Employee extends LightningElement {
    
    Employees=[
        {
            name:'John',
            salary:40000,
            position:'Developer'
        },
        {
            name:'Tom',
            salary:90000,
            position:'Lead'
        },
        {
            name:'Tna',
            salary:8500,
            position:'QE'
        }
    ]

    empsal; 
    newArray=[];
    empdetails(event){
        this.empsal=parseInt(event.target.value)
       this.newArray=this.Employees.filter((employee)=>employee.salary>this.empsal)
       //console.log(this.newArray)
    } 
}