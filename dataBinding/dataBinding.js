import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement 
{
    result;
    numb1;
    numb2;

    ChangeHandler(event){
        const name = event.target.name;
        if(name === 'value1'){
            this.numb1 = event.target.value;
        }else if(name === 'value2'){
            this.numb2 = event.target.value;
        }
    }
    
    handleClick(event){      
        const operator = event.target.label;
        const numb1=parseInt(this.numb1);
        const numb2=parseInt(this.numb2);
        var resulttemp = 0;
        if(operator === 'Add'){
            resulttemp = numb1 + numb2;
        }else if(operator === 'Sub'){
            resulttemp = numb1 - numb2;
        }else if(operator === 'Mul'){
            resulttemp = numb1 * numb2;
        }else if(operator === 'Div'){
            resulttemp = numb1 / numb2;
        }        
        this.result = resulttemp;
    }

    handleClear(event){
     this.numb1=null;
     this.numb2=null;
     this.result=null;
    }
    
}