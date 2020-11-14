import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeService} from '../service/home.service';
import {HttpClientModule} from '@angular/common/http';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PostPageComponent } from './post-page/post-page.component';

const route: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: HomePageComponent},
  {path: 'user/:id/:name', component: PostPageComponent}
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
