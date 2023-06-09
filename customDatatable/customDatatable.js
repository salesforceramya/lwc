//Demonstrate of custum column in Data Table with progress ring
import { LightningElement } from 'lwc';

import lightningDataTable from 'lightning/datatable';

import progressRing from './progressRing.html'

export default class CustomDatatable extends lightningDataTable { 

    static customTypes={
        progRing : {
            template : progressRing
        }
    }
 } 
