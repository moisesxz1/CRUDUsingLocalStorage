import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';




@Injectable()
export class ContactService {

    public url: string;
    public identity: any;
    public token: string;

    constructor(private _http: HttpClient) {

       
    }

    saveContactLS(user){

        let contacts;
        contacts = this.getContactsLS();
        contacts.push(user);
        localStorage.setItem('contacts', JSON.stringify(contacts))

       
       
    }

    getContactsLS() {
        let contactsLS;
    
        if (localStorage.getItem('contacts') === null) {
          contactsLS = [];
        } else {
          contactsLS = JSON.parse(localStorage.getItem('contacts')); 
        }
    
        return contactsLS;
    }

    getSingleContactLS(id) {
        let contactLS
        let contactsLS;
        contactsLS = JSON.parse(localStorage.getItem('contacts'));

        contactLS = contactsLS.find(c => c.id === id)

        if(!contactsLS) {
            return null;
        }

        return contactLS;
    }

    deleteContactLS(id) {
        let contactsLS
        let dummyContactsLS;

        contactsLS = this.getContactsLS();
        dummyContactsLS = contactsLS.filter(c => c.id !== id);

        localStorage.setItem('contacts', JSON.stringify(dummyContactsLS));
        
    }

    updateContactLS(contact, contactId){

        let contactsLS;
        let contactIndex;

        contactsLS = this.getContactsLS();
        contactIndex = contactsLS.findIndex(c => c.id === contactId);

        if(contactIndex <= 0) {
            
        }
        contactsLS[contactIndex] = contact;
        localStorage.setItem('contacts', JSON.stringify(contactsLS));
    }

    
}