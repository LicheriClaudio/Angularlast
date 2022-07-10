import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    MatFormFieldModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,

  ],
})
export class AuthModule {}
