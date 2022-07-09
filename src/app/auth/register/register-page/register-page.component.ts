import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  @ViewChild('f') form!: NgForm;

  error = undefined;

  constructor(private Serviceservice: ServiceService,
    private router: Router) {}

  ngOnInit(): void {}

  invia() {
    //console.log(this.form.value)
    this.Serviceservice.signup(this.form.value).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/loginPage']);
      },
      err => {
        console.log(err.error);
        this.error = err.error;
      }
    );
  }
}
