import { LightningElement,wire } from 'lwc';

import { updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Account.Id';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class UpdateRecordWireDemo extends LightningElement {
    idValue;
    nameValue;
    
    changeIdHandler(event)
    {
        this.idValue=event.target.value;
    }

    changeNameHandler(event)
    {
        this.nameValue=event.target.value;
    }

    handleUpdate(event)
    {
        const fields={};
        fields[ID_FIELD.fieldApiName]=this.idValue;
        fields[NAME_FIELD.fieldApiName]=this.nameValue;
        console.log('fields : ' +JSON.stringify(fields))

        const recordInput = { fields};
        updateRecord(recordInput);
    }
}