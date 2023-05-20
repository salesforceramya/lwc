import { LightningElement,wire } from 'lwc';

import SAMPLEMC from '@salesforce/messageChannel/simple__c'; //get refrence for messaging Channel

import { publish,subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext } from 'lightning/messageService';

export default class MsgPublisher extends LightningElement {

    message;

    @wire(MessageContext) //to get reference of component
    context;

    handleChange(event)
    {
        this.message=event.target.value;
    }

    handleClick(event)
    {
        //construct fieldName or Data to pass
        console.log('Published')
        const msg={
            lmsData : {
                value : this.message
            }
        }

        //pubclish the data to channel
        publish(this.context,SAMPLEMC,msg);
    }
}