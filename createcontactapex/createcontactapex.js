import { LightningElement,wire,api } from 'lwc';

import insertContact from '@salesforce/apex/ContactController.insertContact';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Createcontactapex extends LightningElement {
    
    @api recordId;
    lastName;
    mobilePhone;

    handleChange(event)
    {
        const {name,value}=event.target;
        if(name=='lastName')
        {
            this.lastName=value;
        }
        if(name=='mobilePhone')
        {
            this.mobilePhone=value;
        }
    }

    handleCreate(event)
    {
        insertContact({lastName:this.lastName, Mobile:this.mobilePhone, accId: this.recordId})
        .then(response=>{
            console.log(response)
            this.dispatchEvent(new ShowToastEvent({
                title : "Insert Record",
                message : 'Record Id ' + response,
                variant : 'success'
            }))
        })
        .catch(error=>{
            console.log('Error')
            console.log(JSON.stringify(error))
            this.dispatchEvent(new ShowToastEvent({
                title : "Insert Record",
                message :'Unable to create record ' + error.body.pageErrors[0].message,
                variant : 'error'
            }))
        })
    }
}