import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-generalcomp',
  templateUrl: './generalcomp.component.html',
  styleUrls: ['./generalcomp.component.scss'],
})
export class GeneralcompComponent implements OnInit {
myname = 'Project ';
  constructor(private Serviceservice: ServiceService, private router: Router) {}

  ngOnInit():void {
    this.Serviceservice.authSubject.subscribe(val => {
      if(val !== null) {
        this.myname = ''
        this.myname = `Ciao ${val?.user.firstname} ${val?.user.lastname}, benvenuto su Project` ;
      } else {
        this.myname = 'Project';
      }
    })


    /* this.Serviceservice.authSubject.subscribe(val => {
      if(val !== null ) {

        this.myname = `Benvenuto ${val?.user.firstname} ${val?.user.lastname}   ` ;
      }




    }) */
  }

  logout() {

    this.Serviceservice.logout()


  }
}
