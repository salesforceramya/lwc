import { LightningElement } from 'lwc';

export default class AsyncAwaitFetchDemo extends LightningElement {
  
    posts=[];
    async handleClick(event){
        let url="https://jsonplaceholder.typicode.com/posts";
        try
        {
           const response= await fetch(url,{method:"GET"})
           console.log(response)
           const data=await response.json();
           console.log(data);
           this.posts=data;
           console.log(this.posts)
        }
        catch(e)
        {
            console.log(e);
        }   
    }
}