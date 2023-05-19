import { LightningElement,wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getAccountRatingList from '@salesforce/apex/AccountController.getAccountRatingList'

export default class GetAccountControllerDemo extends LightningElement {
/*
    accountList; //Class level variable to store the data from apex to LWC
    @wire(getAccountList)

    accountHandler(response)
    {
        if(response)
        {
            console.log('Response')
            console.log(response)
            this.accountList=response.data;
        }
      /*  if(error)
        {
            console.log(error)
        }
    }*/

    //Using Property
   /* @wire(getAccountList)
    accounts*/

    //Conditional based on Rating
    accountList;
    rating='Hot';
    @wire(getAccountRatingList,{Rating : '$rating'})
    accountsHandler({data,error})
    {
        if(data)
        {
            console.log('Response');
            this.accountList=data;
        }
    }


}