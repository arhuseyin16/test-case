import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../service/home.service';
import {UserModel} from '../../model/user-model';
import {PaginationModel} from '../../model/pagination.model';
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
  pagination: PaginationModel = new PaginationModel();
  page: number;
  searchNameValue: string;
  maxSize = 7;
  viewedUsers: Array<UserModel>;

  ngOnInit(): void {
    this.viewedUsers = new Array<any>();
    this.usersPageable();
  }

  usersPageable() {
    this.homeService.userList().subscribe(res => {
      this.users = res['data'];
      this.pagination.total = res['meta']['pagination'].total;
      this.pagination.limit = res['meta']['pagination'].limit;
    });
  }

  clickPage(index) {
    this.page = index.target.innerText;
    this.homeService.page = this.page;
    this.homeService.userList().subscribe(res => {
      this.users = res['data'];
     });
  }

  searchNameClick() {
    if (this.searchNameValue !== null && this.searchNameValue !== undefined && this.searchNameValue !== '' ) {
      this.homeService.searchNameValue = this.searchNameValue;
      this.usersPageable();
    } else {
      this.homeService.searchNameValue = '';
      this.usersPageable();
    }
  }

  laterViewedUsers(item) {
    console.log(item);
    this.viewedUsers.push(item);
    this.router.navigate(['/home-page/user', item.id, item.name]);
  }
}

