import { LightningElement } from 'lwc';

export default class Parentcustumevent extends LightningElement {

    handleDisplay(event){
        console.log('Parent handler for child event')
        //console.log(event.detail) for simple string
        console.log(event.detail) //object  
        console.log(event.detail.code) //101
        console.log(event.detail.name) //John
    }
}