import { LightningElement,api } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName'
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
import BIRTH_DATE_FIELD from '@salesforce/schema/Contact.Birthdate'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department'

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Casestudy5 extends LightningElement {

    objectName= CONTACT_OBJECT;
    fieldsList=[FIRST_NAME_FIELD, LAST_NAME_FIELD, BIRTH_DATE_FIELD, EMAIL_FIELD, DEPARTMENT_FIELD]

    successHandler(event)
    {
        this.dispatchEvent(new ShowToastEvent({
            title : "Record Created",
            message : "Record Created with ID :: " + event.detail.id,
            variant : "success"
        }))
    }
}