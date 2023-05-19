import { LightningElement, wire,api } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

import { getFieldValue, getRecord,getRecordUi } from 'lightning/uiRecordApi';

import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import { getObjectInfos } from 'lightning/uiObjectInfoApi';

const fields=[NAME_FIELD,INDUSTRY_FIELD,PHONE_FIELD,ANNUAL_REVENUE_FIELD] // used outside bcz wire doesnot have this keyword

const objectApiNames= [ACCOUNT_OBJECT,CONTACT_OBJECT]

export default class GetFieldValueWireDemo extends LightningElement {
   /*getfieldValues
    @api recordId;

    accountInfo;

    @wire(getRecord,{recordId:'$recordId',fields:fields})
    getAccountData({data,error})
    {
        if(data)
        {
            this.accountInfo=data;
            console.log(data);
        }
    }

    get AccountName()
    {
        return getFieldValue(this.accountInfo,NAME_FIELD)
    }

    get AccountIndustry()
    {
        return getFieldValue(this.accountInfo,INDUSTRY_FIELD)
    }

    get AccountRevenue()
    {
        return getFieldValue(this.accountInfo,ANNUAL_REVENUE_FIELD)
    }*/
    
    /*getRecordUi

    @wire(getRecordUi,{
        recordIds:['0015h00001AXptdAAD','0035h00000sIxoBAAS'],
        layoutTypes:['Full'], 
        modes:['View']})
    recordinfoproperty;

    handleClick(event)
    {
        console.log('hanlde click event')
        console.log(this.recordinfoproperty) //get the record ids in response
        console.log(this.recordinfoproperty.data.records["0015h00001AXptdAAD"].fields.Name.value)
        console.log(this.recordinfoproperty.data.records["0035h00000sIxoBAAS"].fields.LastName.value)
    }*/

    //getObjectInfos
    @api objectApiName;
    objectData;

    //@wire(getObjectInfo,{objectApiNames:'$objectApiNames'})
    @wire(getObjectInfos,{objectApiNames:['Account','Contact']})
    objectInfoHandler(response)
   // objectInfo({data,error})
    {
        console.log('Inside handler Object Infos')
        if(response)
        {
            console.log('Inside handler Object Infos')
            console.log(response)
           /* console.log('Get Object Infos')
            console.log(data);
            this.objectData=data;*/
        }
       /* if(error)
        {
            console.log(error)
        }*/
    }
}