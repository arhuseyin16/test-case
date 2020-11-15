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
  viewedUsers: Array<any> = new Array<any>();
  listUsers: Array<UserModel> = new Array<UserModel>();

  ngOnInit(): void {
    this.usersPageable();
    if (localStorage.getItem('usersList')) {
      this.viewedUsers = JSON.parse(localStorage['usersList']);
    }
    if (this.viewedUsers.length !== 0) {
      this.listUsers = this.viewedUsers;
    }
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

  userListLengthValidation() {
    if (this.listUsers.length > 4) {
      this.listUsers.shift();
    }
  }

  laterUsersAdd(user) {
    let status = true;
    if (this.listUsers.length > 0) {
      this.listUsers.forEach(row => {
        if (status === true) {
          if (row.id === user.id) {
            status = false;
          }
        }
      });
      if (status === true) {
        this.userListLengthValidation();
        this.listUsers.push(user);
        localStorage['usersList'] = JSON.stringify(this.listUsers);
      }
    } else {
      this.listUsers.push(user);
      localStorage['usersList'] = JSON.stringify(this.listUsers);
    }
  }

  laterViewedUsers(item) {
   this.laterUsersAdd(item);
   this.router.navigate(['/home-page/user', item.id]);
  }

  laterUsersViewPostsClick(user) {
    this.router.navigate(['/home-page/user', user.id]);
  }
}

