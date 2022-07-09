import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
];
@NgModule({
  declarations: [UsersComponent],

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatSliderModule,
  ],
})
export class UsersModule {}
