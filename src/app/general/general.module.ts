import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralcompComponent } from './generalcomp/generalcomp.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    GeneralcompComponent
  ],
  imports: [AppRoutingModule,
    CommonModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [GeneralcompComponent]
})
export class GeneralModule { }
