import { LightningElement } from 'lwc';

import updateRevenue from '@salesforce/apex/AccountController.updateRevenue';

export default class RefreshDetailPageDemo extends LightningElement {

    handleClick(event)
    {
        updateRevenue({recId:'0015h00001KakT7AAJ'})
        .then(response=>{
            console.log('Revenue updated')
            //create custum event and dispatch
            this.dispatchEvent(new CustomEvent('refreshAccount',{
                detail: 'Refresh Account'
            }))
        })
        .catch(error=>{
            console.log(error)
        })
    }
}