import { LightningElement,wire } from 'lwc';

import SAMPLEMC from '@salesforce/messageChannel/simple__c'; //get refrence for messaging Channel

import { publish,subscribe,unsubscribe,APPLICATION_SCOPE,MessageContext } from 'lightning/messageService';

export default class Msgsubscriber extends LightningElement {

    messageRecieved;

    @wire(MessageContext) //to get reference of component
    context;

    //when component gets loaded subscribeMessage method will be called
    connectedCallback()
    {
        this.subscribeMessage();
    }

    subscribeMessage()
    {
        //context(It is which component), channel reference, listener (Method), subscriberoptions
        subscribe(this.context, SAMPLEMC, (message)=>{this.handleIncomingMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    //Publisher will wrap the data in msg and publish the scubsriber will check the messsage as value and then display
    //To display the message 
    handleIncomingMessage(message)
    {
        this.messageRecieved = message.lmsData.value ? message.lmsData.value : 'No message';
    }
}