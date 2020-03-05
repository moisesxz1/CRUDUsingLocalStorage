import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../../models/contact'
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
  providers: [ContactService]
})
export class EditContactComponent implements OnInit {

  public page_title: string;
  public contact: Contact;

  public status: string;
  

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _contactService: ContactService
  ) {

    this.page_title = 'Ajutes de Usuario';
    
    
  }

  ngOnInit() {

    this._route.params.subscribe(params => { // Recojer el parametro que llega por la URL
      let id = params.id
      
      this.getProject(id)
    })
  }

  getProject(id) {
    this.contact = this._contactService.getSingleContactLS(id);
  }

  onSubmit() {
    this._contactService.updateContactLS(this.contact, this.contact.id);
    this._router.navigate(['/contacts']);
  }
}
