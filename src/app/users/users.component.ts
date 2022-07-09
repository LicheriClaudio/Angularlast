import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iauth } from '../auth/interfaces/iauth';
import { ServiceService } from '../auth/service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Iauth[] = [];
  error = undefined;
  constructor(
    private Serviceservice: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.Serviceservice.authSubject.subscribe((userLogin) => {
      this.http
        .get<Iauth[]>('http://localhost:3000/users', {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + userLogin?.accessToken,
          }),
        })
        .subscribe(
          (resp) => {
            console.log(resp);
            this.users = resp;
          },
          (err) => {
            console.log(err);
            this.error = err.error;
          }
        );
    });
  }
}
