import { LightningElement, track } from 'lwc';

export default class Demo extends LightningElement {

    fruits=['Apple','Orange','Mango'];

    employees=[
        {
            name:'John',
            salary:40000
        },
        {
            name:'Tom',
            salary:90000
        },
        {
            name:'Tna',
            salary:8500
        }
    ]
   /* isShow=false;

    changeHandler(event){
        this.isShow=!this.isShow;
    }
    firstName='Ramya'

   @track employee=[50000,'Bangalore']

    get employeeCity()
    {
        return this.employee[1];
    }

    @track person={
        name:'John',
        position:'Developer'
    }

    changeHandler(event){
        //this.firstName='Pavani';
        //this.person.position='Lead';
        this.employee[1]='Mysore';
    }
*/
    
}