import { LightningElement } from 'lwc';

export default class DataIdDemo extends LightningElement {

    handleClick(event)
    { 
        //To identify and set 
        //this.template.querySelector("lightning-input[data-id1]").value="Sample Data"; // Identifying and assigning some value

        //To get the value

        //console.log(event.target.dataset)

        const s=this.template.querySelector("lightning-input[data-id1]").value;// To identify the element 
        console.log(s)

        this.template.querySelector("lightning-input[data-id1]").value="sample data"; // To set the value

        console.log(event.target.dataset.btn) // To get the value when the button is clicked
    }

    handleChange(event)
    {
        console.log(event.target.dataset.id2) //  To get the value when the we input in B 
    }
}