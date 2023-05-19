import { LightningElement ,wire} from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccountList';

import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DatatableDemo extends LightningElement {

   // @wire(getAccountList)
    accountsList;
    accList

    saveDraftValues;

    columnsList=[
        {label : 'Id', fieldName : 'Id'},
        {label : 'Name', fieldName : 'Name', editable:true},
        {label : 'Revenue', fieldName : 'AnnualRevenue', editable:true},
        {label : 'Rating', fieldName : 'Rating', editable:true}
    ]

    /*columnsList=[
        {label : 'Id', fieldName : 'Id'},
        {label : 'Name', fieldName : 'Name'},
        {label : 'Revenue', fieldName : 'AnnualRevenue'},
        {label : 'Rating', fieldName : 'Rating'},
        {
            type : 'action',
            typeAttributes:{
                rowActions : [
                                {label : 'Show Details' , name :'show_details',iconName : 'utility:preview'},
                                {label : 'Remove Details' , name :'remove_details',iconName : 'utility:close'},
                             ]
            }
        }
    ]*/

    /*columnsList=[
        {label : 'Id', fieldName : 'Id'},
        {label : 'Name', fieldName : 'Name'},
        {label : 'Revenue', fieldName : 'AnnualRevenue'},
        {label : 'Rating', fieldName : 'Rating'},
        {
            type : 'button',
            typeAttributes :{
                variant : 'brand',
                label : 'View',
                value : 'Open'
            } 
        },
        {
            type : 'button-icon',
            typeAttributes:{
                iconName : 'action:preview'
            }
        }
    ]*/

    @wire(getAccountList)
    getAccountHandler({data,error})
    {
        if(data)
        {
            this.accountsList=data;
            this.accList=this.accountsList.slice(0,3);
            console.log(this.accList)
        }
    }

    //1. We have separate button to identify the rows selected

    handleClick(event)
    {
        const rows=this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log(rows);
        console.log(JSON.stringify(rows));
    }

    //In lightning data table we can figure which rows get selected using handler
    //onRowSelection - When checkbox is selected
    handleSelect(event)
    {
        const row=event.detail.selectedRows;
        console.log('Selected Rows :: ' + JSON.stringify(row))
    }

    //onRowAction
    handleRowAction(event)
    {
        console.log(JSON.stringify(event.detail))
        console.log(JSON.stringify(event.detail.row))
        console.log(JSON.stringify(event.detail.action))
    }

    //inline edit - draft-values --> edited row information
    //onsave - handler

    handleSave(event)
    {
        //to update changes back to org
        //1. Write an Apex Method 
        //2. uirecordApi - updateRecord

       /* console.log(event.detail)
        this.saveDraftValues=event.detail.draftValues;
        console.log(this.saveDraftValues)
        console.log(JSON.stringify(this.saveDraftValues));

        //this.saveDraftValues=event.detail.draftValues;
        const modifiedRecInputs= this.saveDraftValues.slice();
        console.log(JSON.stringify(modifiedRecInputs));

        const recInputs=this.saveDraftValues.slice().map(draft=>{
            const fields=Object.assign({},draft)
            return {fields}
        })

        console.log('Record Inputs :: '+ JSON.stringify(recInputs))

        /*const promises=recInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises)
        .then(response=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Record Updation',
                message : 'Record updated successfully',
                variant : 'success'
            }))

            this.saveDraftValues=[];
        })
        .catch(error=>{
            console.log(error)
        })*/
       
        this.saveDraftValues=event.detail.draftValues;
        console.log(this.saveDraftValues);
        console.log(JSON.stringify(this.saveDraftValues))
        const vals = JSON.parse(JSON.stringify(this.saveDraftValues))
        console.log(vals)

        const v=vals.map(m=>{
            console.log(m)
            return {fields:m}
        })

        console.log(JSON.stringify(v))

        const promises=v.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises)
        .then(res=>{
            this.dispatchEvent(new ShowToastEvent({
                title : 'Record Updation',
                message : 'Record updated successfully',
                variant : 'success'
            }))

            this.saveDraftValues=[];
        })
        .catch(error=>{
            console.log(error)
        })
    }
}