import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MatSliderModule } from '@angular/material/slider';
import { GeneralModule } from './general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralModule,
    AuthModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
