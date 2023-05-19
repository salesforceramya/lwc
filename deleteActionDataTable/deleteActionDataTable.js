import { LightningElement , wire,track} from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccountList';

import {deleteRecord} from 'lightning/uiRecordApi';

import {refreshApex} from '@salesforce/apex';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteActionDataTable extends LightningElement {

    @track recordId

    accountsList
    wiredAccountList

    columnsList=[
        {label : 'Id', fieldName : 'Id'},
        {label : 'Name', fieldName : 'Name'},
        {label : 'Revenue', fieldName : 'AnnualRevenue'},
        {label : 'Rating', fieldName : 'Rating'},
        {
            type : 'button-icon',
            typeAttributes:{
                iconName : 'utility:delete'
            }
        }
    ]

    @wire(getAccountList)
    getAccountHandler(response)
    {
        this.wiredAccountList=response;
        if(response.data)
        {
            this.accountsList=response.data;
        }
    }

    handleRowAction(event)
    {
        console.log(event.detail.row)
        console.log(event.detail.row.Id)
        this.recordId= event.detail.row.Id;
        console.log(this.recordId)
        deleteRecord(this.recordId)
        .then(response=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Delete Record',
                message : 'Record Deleted Id ',
                variant : 'success'
            }))

            refreshApex(this.wiredAccountList);
        })
        .catch(error=>{
            console.log(JSON.stringify(error))
        })
    }
}