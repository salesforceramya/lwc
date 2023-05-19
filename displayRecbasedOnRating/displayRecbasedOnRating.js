import { LightningElement ,wire} from 'lwc';

import getAccountRatingList from '@salesforce/apex/AccountController.getAccountRatingList';

export default class DisplayRecbasedOnRating extends LightningElement {

    value='';
    accountList;

    get options(){
        return [
            { label: 'Hot', value : 'Hot'},
            { label: 'Cold', value : 'Cold'},
            { label: 'Warm', value : 'Warm'},
        ]
    }

    handleChange(event)
    {
        this.value=event.detail.value;
    }
    
    @wire(getAccountRatingList,{Rating : '$value'})
    accountsHandler({data,error})
    {
        if(data)
        {
            console.log('Response');
            this.accountList=data;
            console.log(data)
        }
    }

}