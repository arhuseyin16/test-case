import { Component, OnInit } from '@angular/core';
import {HomeService} from '../service/home.service';
import {UserModel} from '../model/user-model';
import {PaginationModel} from '../model/pagination.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService,
              private router: Router) { }

  users: Array<UserModel>;
  items = [];
  pageOfItems: Array<any>;

  ngOnInit(): void {
    this.homeService.userList().subscribe(res => {
     console.log(res);
     this.users = res['data'];
    });
  }
}
