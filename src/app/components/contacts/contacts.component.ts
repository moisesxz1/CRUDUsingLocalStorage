import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';


@Component({
  selector: 'app-users',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  public contacts: Array<Contact>;
  public url: string;
  public page_title: string;

  constructor(

    private _userService: ContactService
  ) {

    this.page_title = 'Contacts';
    
  }

  ngOnInit() {
     this.contacts = this._userService.getContactsLS();
     
  }

  getContactsLS() {
    
      this._userService.getContactsLS().subscribe(
        response => {
          console.log(response);
        }
      )
    
}

}
