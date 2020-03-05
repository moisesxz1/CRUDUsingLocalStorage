import { Component, OnInit } from '@angular/core';

import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
//import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public contact: Contact;
  public confirm: boolean;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    //this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this._route.params.subscribe(params => { // Recojer el parametro que llega por la URL
      let id = params.id
      
      this.getContact(id)
    })
  }

  getContact(id) {
    this.contact = this._contactService.getSingleContactLS(id);
  }

  setConfirm(confirm:boolean){
    this.confirm = confirm;
  }

  deleteContact(id){
    this._contactService.deleteContactLS(id);
    this._router.navigate(['/contacts']);

}
}
