import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DateTimeFormatPipe} from '../common/date.pipe';
import {HomeService} from '../service/home.service';
import {HttpClientModule} from '@angular/common/http';
import {JwPaginationModule} from 'jw-angular-pagination';

const route: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: HomePageComponent}
];

@NgModule({
  declarations: [HomePageComponent, DateTimeFormatPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwPaginationModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
