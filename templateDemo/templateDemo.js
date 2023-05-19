import { LightningElement } from 'lwc';

export default class TemplateDemo extends LightningElement {

    clickHandler()
    {
        /*const response=this.template.querySelector("p"); // This only returns first para
        console.log(response);

        //When you want to get all the para loop through it and use querySelectorAll*/
        const response=this.template.querySelectorAll("p"); 
        console.log(response)   

        //to convert into array

        Array.from(response).forEach((element) => {
            console.log(element.innerHTML)
        }); // gets all the values of paragraph

        //Access div 

        const elementDiv=this.template.querySelector(".dynamic");
        elementDiv.innerHTML="<p style='background:blue'> Dynamic Pragraph</p>"

        const e=this.template.querySelector(".test");
        console.log(e.innerHTML); 
        e.innerHTML="<p style='background:blue'> Test Pragraph</p>"
    }
}