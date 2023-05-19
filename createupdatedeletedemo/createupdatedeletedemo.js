import { LightningElement,wire } from 'lwc';

import { createRecord } from 'lightning/uiRecordApi';

export default class Createupdatedeletedemo extends LightningElement {
    //create,delete,update
    formData={};
    changeHandler(event)
    {
            //formData. 
            //formData[] - TO ACCESS THE DATA
            //Object Destructuting
        const {name,value}=event.target;
        this.formData[name]=value;
    }

    handleClick(event)
    {
        createRecord({apiName:'Account',fields:this.formData})
        .then(response=>{
            console.log(response)
            this.formData={}
        })
    }
}