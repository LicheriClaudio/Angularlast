import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, tap } from 'rxjs';
import { Iauth } from './interfaces/iauth';
import { Iregister } from './interfaces/iregister';


@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  authSubject = new BehaviorSubject<Iauth | null>(null);
  private urlJsonServer = 'http://localhost:3000';
  helper = new JwtHelperService();
  users: Iauth[] = [];
  error = undefined;
  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.authSubject.subscribe((userLogin) => {
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

  restoreUserLogin() {
    const json = localStorage.getItem('isAuthenticated');
    if (json) {
      const user = JSON.parse(json);
      if (this.helper.isTokenExpired(user.accessToken)) {
        localStorage.removeItem('isAuthenticated');
        return;
      } else {
        this.authSubject.next(user);
      }
    }
  }

  login(obj: Iregister) {
    return this.http.post<Iauth>(this.urlJsonServer + '/loginPage', obj).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('isAuthenticated', JSON.stringify(data));
      })
    );
  }

  signup(obj: Iregister) {
    return this.http.post(this.urlJsonServer + '/registerPage', obj);
  }

  logout() {
    console.log('Logout');
    this.authSubject.next(null);
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/loginPage'])
    location.reload();
  }
}
