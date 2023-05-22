import { LightningElement } from 'lwc';

import {CloseActionScreenEvent} from 'lightning/actions'

import {NavigationMixin} from 'lightning/navigation';

import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';

   
export default class Utilitynavigationdemo extends NavigationMixin(LightningElement) {

    handleClick(event)
    {

       /* this[NavigationMixin.Navigate]({
           type :'standard__namedPage',
           attributes :  {
                pageName : 'chatter'
               // pageName : 'home'
           }
        })

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'view',
            },
         })

         this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId : '0015h000016jfXoAAI',
                objectApiName: 'Account',
                actionName: 'view',
            },
         })

         //Set the default values
         const defaultValues=encodeDefaultFieldValues({
            FirstName : 'AJ',
            LastName : 'Skill'
         })
         this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new',
            },
            state : {
                //key value pair
                defaultFieldValues : defaultValues
            }
         })

         //List view navigation
         this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list',
            },
            state : {
                //Name of the list view
                filterName : 'Recent'
            }
         })

         //Navigate to tab
         this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName : 'LWC_Session'
            }
         })

         //Navigate to record related page
         this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                ObjectApiName : 'Account',
                relationshipApiName : 'Contacts',
                recordId : '0015h000016jfXoAAI',
                actionName : 'view'
            }
         })

         //Navigate to Web Page
         this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url :"https://google.com" 
            }
         })*/

         //Navigate to other LWC Component
         var definitionofcmp={
            componentDef : 'c:utlitynavigationdemo'
         }
         this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url :"/one/one.apex#" + btoa(JSON.stringify(definitionofcmp))
            }
         })


        //this.dispatchEvent(new CloseActionScreenEvent())
    }
}