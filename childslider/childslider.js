import { LightningElement,api } from 'lwc';

export default class Childslider extends LightningElement {
   @api slidervalue;
   @api maxsliderval;

   @api resetslidervalue(){
    this.slidervalue=0;
   }
}