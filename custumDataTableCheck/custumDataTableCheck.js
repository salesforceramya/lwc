//code to demo the custum progress ring 
import { LightningElement } from 'lwc';

export default class CustumDataTableCheck extends LightningElement {

    data=[
        {'Id' : 1 , Name : 'Ryan', 'score' : '80'},
        {'Id' : 2 , Name : 'Dia', 'score' : '20'},
        {'Id' : 3 , Name : 'Tina', 'score' : '30'}
    ]

    columnsList =  [
        {label:'Id', fieldName : 'Id'},
        {label:'Name', fieldName : 'Name'},
        {label:'Progress', fieldName : 'score', type:'progRing'}
    ]
}
