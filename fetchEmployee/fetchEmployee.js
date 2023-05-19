import { LightningElement, track } from 'lwc';

export default class FetchEmployee extends LightningElement {
   @track employees;
   @track filteredEmployees;
   @track showCurrentEmployee;
   @track currentEmployeeIndex = 0;
   @track currentEmployee;
 
    async handleClick(){
        let url="https://sfdev36-dev-ed.my.salesforce-sites.com/services/apexrest/employees";
       // let url="https://jsonplaceholder.typicode.com/posts";
        try{
            let response= await fetch(url,{method:"GET"})
            console.log(response);
            let data=await response.json();
            this.employees=data.employee;
            this.filteredEmployees=this.employees;
           console.log(this.employees);
                 
        }
        catch(e)
        {
            console.log(e);
        }
    }

    handleSearch(event) {
    console.log('Searching:', event.target.value);
    let searchKey = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((employee) => employee.Name.toLowerCase().includes(searchKey));
    this.employees=this.filteredEmployees;
    }

    handleNext() {
       if(this.currentEmployeeIndex<this.employees.length-1){
           this.currentEmployeeIndex++;
           this.currentEmployee=this.employees[this.currentEmployeeIndex];
       }
    }

    handlePrevious() {
       if (this.currentEmployeeIndex > 0) {
           
       this.currentEmployeeIndex--;
       this.currentEmployee = this.employees[this.currentEmployeeIndex];
   }
    }
    
}