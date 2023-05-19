import { LightningElement, api} from 'lwc';

export default class Parentprogressbar extends LightningElement {
    @api progress;

    handleClick()
    {
        //From here we call the child method handleStart
        this.template.querySelector("c-childprogressbar").handleStart();
        this.template.querySelector("lightning-button").disabled=true;

    }

    handleFinish(event)
    {
        console.log('Helo')
        this.template.querySelector("lightning-button").disabled=false;
        this.template.querySelector("c-childprogressbar").resetprogressvalue();
    }
}