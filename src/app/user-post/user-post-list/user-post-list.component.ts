import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserPost } from '../user-post.model';
import { UserPostService } from '../user-post.service';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.css']
})
export class UserPostListComponent implements OnInit, OnDestroy {
  userPosts: UserPost[];
  subscription: Subscription;

  constructor(private userPostService: UserPostService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.userPostService.userPostsChanged
      .subscribe(
        (userPosts: UserPost[]) => {
          this.userPosts = userPosts;
        }
      );
    this.userPosts = this.userPostService.getUserPosts();
  }

  onNewUserPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
