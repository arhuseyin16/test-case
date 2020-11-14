import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '**',
    redirectTo: 'home-page'
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home.module').then(m => m.HomeModule)
  },
  {
    path: 'post-page',
    loadChildren: () => import('./post-page/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
