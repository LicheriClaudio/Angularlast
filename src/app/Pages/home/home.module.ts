import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule,
    MatTableModule,
    MatCardModule,
  ],
})
export class HomeModule {}
