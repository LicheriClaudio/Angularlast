import { Component, OnInit, ViewChild, } from '@angular/core';
import { FormControl, NgForm, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { Iauth } from '../../interfaces/iauth';
import { ServiceService } from '../../service.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  local = localStorage.length
  error = undefined;
  hide = true;
  json = localStorage.getItem('isAuthenticated');
  users: Iauth[] = [];
  use = ''
  constructor(private Serviceservice: ServiceService, private router: Router) {}
  ngOnInit(): void {
    console.log('ngoninit funziona');

    this.Serviceservice.authSubject.subscribe((val) => console.log(val?.user));
     this.Serviceservice.authSubject.subscribe((val) => {
      this.use = `${val?.user.firstname}-${val?.user.lastname} `;

    });
  }






  invia() {
    console.log(this.local)
    console.log(this.form.value);
    this.Serviceservice.login(this.form.value).subscribe(
      (resp) => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['home']);
      },
      (err) => {
        console.log(err.error);
        this.error = err.error;
      }
    );
  }
}
export class CardOverviewExample {}

export class FormFieldAppearanceExample {}

export class FormFieldPrefixSuffixExample {

}


