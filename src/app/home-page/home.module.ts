import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeService} from '../service/home.service';
import {HttpClientModule} from '@angular/common/http';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {HomePageComponent} from './user-list/home-page.component';
import {PostPageComponent} from './user-post-page/post-page.component';

const route: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: HomePageComponent},
  {path: 'user/:id', component: PostPageComponent}
];

@NgModule({
  declarations: [HomePageComponent, PostPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    PaginationModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
