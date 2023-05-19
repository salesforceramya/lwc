import { LightningElement,api } from 'lwc';

export default class Parentslider extends LightningElement {
    
    @api maxsliderval;
    slidervalue;
    resetslidervalue;

    handleChange(event)
    {
        this.slidervalue=event.target.value;
    }

   /* handleClick(event)
    {
        this.slidervalue=0;
    }*/

    handleClick()
    {
        this.template.querySelector("c-childslider").resetslidervalue(); //calling child component method 
    }
}