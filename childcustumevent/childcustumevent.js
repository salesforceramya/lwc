import { LightningElement } from 'lwc';

export default class Childcustumevent extends LightningElement {

    handleClick(event)
    {
        console.log('Event raised from child')
        //1. Create custum event
        //const e = new CustomEvent('display',{detail:"Test Data"});//Pass simple string

        const e = new CustomEvent('display',
                                            {
                                                detail: {code:101,name:'John'} //Pass Object
                                            }
                                )
        //2.Dispatch event
        this.dispatchEvent(e);
    }
}