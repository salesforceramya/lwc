import { LightningElement,track } from 'lwc';

export default class Product extends LightningElement {

    isStock=true;
    msg='';

    @track product={
        name:'TV',
        price:80000,
        stock:''
    }

    changeHandler(event){
        
        const p = event.target.value;
        this.product.stock=p;
        if(this.product.stock==0)
        {
            this.isStock=true;
            this.msg='No Stock Available';   
        }
        else
        {
            this.isStock=false;
            this.product.stock;
            this.product.name;
            this.product.price;
        }
    }


    
}