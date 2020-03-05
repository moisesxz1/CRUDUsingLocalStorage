import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ContactService]
})
export class RegisterComponent implements OnInit {

  public page_title: string;
  public user: Contact;
  public status: string;
  public contacts: Array<Contact>;

  constructor(
    private _userService: ContactService
  ) {

    this.page_title = 'Sign up'
    this.user = new Contact((Math.random() * 10).toString(), '', '', '', '');
  }

  ngOnInit() {


  }


  onSubmit(form) {

    let contact;
    
    this.contacts = this._userService.getContactsLS();
    
    contact = this.contacts.find(c => c.email === this.user.email)

    if(contact) {
      this.status = 'existingEmail';
      return;
    }

    this._userService.saveContactLS(this.user);
    this.status = "success";
    form.reset();

  }
}
