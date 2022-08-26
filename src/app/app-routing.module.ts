import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('src/pages/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('src/pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '',
    loadChildren: () => import('src/pages/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'pagenotfound',
    loadChildren: () => import('src/pages/pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule)
  },
  {
    path: '**',
    redirectTo: 'pagenotfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
