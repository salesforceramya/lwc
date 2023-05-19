import { LightningElement,api } from 'lwc';

export default class Childprogressbar extends LightningElement {
    progress=0;
 
    //Since handleStart is accessed globally in parent we go for @api
    @api handleStart()
    {
        console.log('hai')
        //this does its own logic
        try{
            let v = setInterval(()=>{
                this.progress=this.progress+10;
                
                console.log('Executed')
                console.log( this._interval)
                //Once it reach 100 we call the parent component by creating custum event
                if(this.progress>=100){
                    clearInterval(v);
                    const e=new CustomEvent('progressfinished');
                    this.dispatchEvent(e);
                }
            },2000)
        }
        catch(e)
        {
            console.log(e)
        }
    }

    @api resetprogressvalue()
    {
        this.progress=0;
    }
    
}