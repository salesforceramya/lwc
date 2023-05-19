import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {

    custumColor='redColor';

    msg='WELCOME';

    handleClickRed(){
        this.custumColor='redColor';
    }

    handleClickBlue(){
        this.custumColor='blueColor';
    }

}