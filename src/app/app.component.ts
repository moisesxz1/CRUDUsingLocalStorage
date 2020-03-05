import { Component, OnInit, DoCheck } from '@angular/core';
import { ContactService } from './services/contact.service';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactService]
})
export class AppComponent implements OnInit {
  public title = 'Foro en angular';
  public identity: any;
  public token: string;
  public url: string;
  public search: string;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {


  }

  ngOnInit(){

    
  }


}

//DoCheck : Cuando se produce un cambio a nivel de componentes en la aplicacion, se ejecuta este hook
