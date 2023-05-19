import { LightningElement,wire } from 'lwc';

import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts'

export default class SearchAccounts extends LightningElement {

    accountName;
    accountList

    handleChange(event)
    {
        this.accountName=event.target.value;
    }

    handleSearch(event)
    {
        getAllAccounts({accountName : this.accountName})
        .then(response=>{
            console.log(response);
            this.accountList=response;
        })
        .catch(error=>{
            console.log('Error ' + error);
        })
    }
}