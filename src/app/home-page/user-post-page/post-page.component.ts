import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../service/home.service';
import {UserPostModel} from '../../model/user-post.model';
import {UserModel} from '../../model/user-model';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  userId: string;
  userName: string;
  userPosts: Array<UserPostModel>;
  hidden = false;
  viewedUsers: Array<UserModel> = new Array<UserModel>();

  constructor(private activatedRoute: ActivatedRoute,
              private homeService: HomeService,
              private router: Router) { }

  ngOnInit(): void {
    this.viewedUsers = JSON.parse(localStorage['usersList']);
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.userNameFilter(this.userId);
      this.userPost(this.userId);
    });
  }

  noDataValidation() {
    if (this.userPosts.length === 0) {
      this.hidden = true;
    }
  }

  userPost(userId) {
    this.homeService.userPostId(userId).subscribe(res => {
      this.userPosts = res['data'];
      this.noDataValidation();
    });
  }

  userNameFilter(userId) {
    this.viewedUsers.forEach(row => {
      if (row.id === Number(userId)) {
        this.userName = row.name;
      }
    });
  }

  laterUsersViewPostsClick(user) {
    this.router.navigate(['/home-page/user', user.id]);
  }

}
