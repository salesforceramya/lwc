import { LightningElement } from 'lwc';

export default class UpperCase extends LightningElement {
    name='';

    changeHandler(event){
        this.name=event.target.value;
    }

    get upperCaseName(){
        return `${this.name}`.toUpperCase();
    }
   
}
