import { LightningElement, wire } from 'lwc';
import FNAME from '@salesforce/schema/Contact.FirstName';
import LNAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import reduceErrors from 'c/ldsUtils';

export default class ContactList extends LightningElement {
    columns = [
        {label: 'First Name', fieldName: FNAME, type: 'text'},
        {label: 'Last Name', fieldName: LNAME, type: 'text'},
        {label: 'Email', fieldName: EMAIL, type: 'Email'}
    ];

    @wire(getContacts)
    conList;

    get errors(){
        return (this.conList.error) ? reduceErrors(this.conList.error) : [];
    }
}