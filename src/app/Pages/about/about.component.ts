import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Iauth } from 'src/app/auth/interfaces/iauth';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  use = 'ciao ';
  error = undefined;
  users: Iauth[] = [];
  constructor(
    private Serviceservice: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.Serviceservice.authSubject.subscribe((val) => {
      this.use = `${val?.user.firstname} -- ${val?.user.lastname} -- ${val?.user.email}, `;
    });
  }
}
