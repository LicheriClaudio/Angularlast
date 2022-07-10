import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './auth/guard.guard';
import { LoginPageComponent } from './auth/login/login-page/login-page.component';
import { RegisterPageComponent } from './auth/register/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [GuardGuard],
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'About',
    canActivate:[GuardGuard],
    loadChildren: () =>
      import('./Pages/about/about.module').then((m) => m.AboutModule),
  },
    { path: 'loginPage',
      component: LoginPageComponent },

  { path: 'registerPage',
  component: RegisterPageComponent
  },

    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: '**',
    loadChildren: () =>
      import('./Pages/page404/page404.module').then((m) => m.Page404Module),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
