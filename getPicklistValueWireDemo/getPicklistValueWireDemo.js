import { LightningElement,wire } from 'lwc';

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType} from 'lightning/uiObjectInfoApi';

export default class GetPicklistValueWireDemo extends LightningElement {
    //1.get record type id
    //2. get picklist info

    recordTypeId;
    industryOptions;
    value;

    @wire(getObjectInfo,{objectApiName:'Account'})
    getObjectData({data,error})
    {
        console.log('Response')
        if(data)
        {
           console.log('Inside Response')
           this.recordTypeId=data.defaultRecordTypeId;
           console.log(this.recordTypeId)
        }
    }

    @wire(getPicklistValues,{recordTypeId:'$recordTypeId',fieldApiName:INDUSTRY_FIELD})
    getpicklistData({data,error})
    {
        console.log('Inside picklist wire')
        if(data)
        {
            console.log('Inside  wire')
           // console.log(data.values)
            //loop -map -modify the array and return
            this.industryOptions=data.values.map(d=>{
                //console.log(d)
                return { label: d.label, value: d.value}
            })

            console.log(JSON.stringify(this.industryOptions))
           
        }
    }

    handleChange(event)
    {
        this.value=event.detail.value
    }

    //To get all picklist values
    @wire(getObjectInfo,{objectApiName:'Account'})
    objectinfoprop

    @wire(getPicklistValuesByRecordType,{objectApiName:'Account',recordTypeId:'$objectinfoprop.data.defaultRecordTypeId'})
    getPicklistDataByRecordType

    handleClick(event)
    {
        console.log('All data');
        console.log(this.getPicklistDataByRecordType.data)
        //const picklistval=JSON.stringify(this.getPicklistDataByRecordType.data)
    }
}