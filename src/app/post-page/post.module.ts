import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostPageComponent} from './post-page.component';

const route: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: PostPageComponent}
];

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  providers: []
})
export class PostModule { }
