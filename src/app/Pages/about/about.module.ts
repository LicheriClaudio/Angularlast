import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatSliderModule,
    MatCardModule
  ]
})
export class AboutModule { }
