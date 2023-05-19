import { LightningElement } from 'lwc';
import accounttemplate from './accounttemplate.html';
import contacttemplate from './contacttemplate.html';
import renderdemo from './renderdemo.html';

export default class Renderdemo extends LightningElement {

   selected;

   handleClick(event)
   {
    this.selected=event.target.label;
   }

   render()
   {
        return this.selected== 'Account' ? accounttemplate : this.selected == 'Contact' ? contacttemplate : renderdemo;
   }
    
}