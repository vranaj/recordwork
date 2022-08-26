import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {PostsComponent} from './posts/posts.component';
import {AuthGuard} from '../../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent
    canActivate: [AuthGuard],
    component: PostsComponent
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    component: PostsComponent
  },
  {
    path: '**',
    redirectTo: 'pagenotfound'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
