import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iauth } from 'src/app/auth/interfaces/iauth';
import { Iregister } from 'src/app/auth/interfaces/iregister';
import { Userdati } from 'src/app/auth/interfaces/userdati';
import { ServiceService } from 'src/app/auth/service.service';
import { UsersComponent } from 'src/app/users/users.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: Iauth[] = [];
  error = undefined;
  utente: Userdati[] = [];
  /* {accessToken:"qweqrewfs",user:{email:"claudio@gmail.com",
    firstname: "claudio",
    lastname: "ciao",
    id: 6},} */
local = this.utente.length
  use = 'ciao ';
  constructor(
    private Serviceservice: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.utente)

    /*  this.Serviceservice.authSubject.subscribe((val) => {
      this.use = `${val?.user.firstname} -- ${val?.user.lastname} -- ${val?.user.email}, `;




     }); */
  }

 /*  load() {
    setInterval(() => location.reload(), 5000);
  } */

  remove(u: Userdati) {
    let index = this.utente.indexOf(u);
    this.utente.splice(index, 1);
    console.log(u);
    console.log(this.utente.length)
    return this.utente;
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.Serviceservice.authSubject.subscribe((userLogin) => {
      this.http
        .get<Userdati[]>('http://localhost:3000/users', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.accessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.utente = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }
}




