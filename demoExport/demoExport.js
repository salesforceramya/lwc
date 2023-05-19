import { LightningElement } from 'lwc';

import {sum,firstName,lastName} from './util' // when we have export used in function

//import lastName from './util' // when we use default - NO clurly braces

import {oddOreven} from 'c/myUtil'

export default class DemoExport extends LightningElement {

    changeHandler(event){
        alert(firstName)
        alert(lastName)  
        alert(oddOreven(5))
        alert(sum(10,20)) 
    }
}