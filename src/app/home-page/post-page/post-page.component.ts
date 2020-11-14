import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../service/home.service';
import {UserPostModel} from '../../model/user-post.model';

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
  constructor(private activatedRoute: ActivatedRoute,
              private homeService: HomeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.userName = params['name'];
      this.homeService.userPostId(this.userId).subscribe(res => {
        this.userPosts = res['data'];
        if (this.userPosts.length === 0) {
          this.hidden = true;
        }
        console.log('user:', this.userPosts);
      });
    });
  }

}
