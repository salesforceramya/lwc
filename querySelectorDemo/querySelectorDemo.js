import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    employees=[
        {
            id:101,
            name:'John',
            salary:80000
        },
        {
            id:102,
            name:'Tom',
            salary:50000
        },
        {
            id:103,
            name:'Kia',
            salary:20000
        }
    ]

    handleClick(event)
    {
        const empno=event.target.dataset.empno;
        const empname=event.target.dataset.empname;
        alert(`code=${empno} and name=${empname}`);
    }

    handleClear(event)
    {
        const empno=event.target.dataset.empno;
        this.template.querySelector(`lightning-input[data-empno='${empno}']`).value="";
        //this.template.querySelector("lightning-input[data-empno='101']").value="";
    }

    handleClearFirst()
    {
        this.template.querySelector("lightning-input[data-empno='101']").value="";
    }

    handleClearAll()
    {
        const s = this.template.querySelectorAll("lightning-input")
        Array.from(s).forEach(element => {
            element.value="";
        });

        //Array.from(this.template.querySelectorAll("lightning-input")).foreach(e=>e.value="");
    }
}