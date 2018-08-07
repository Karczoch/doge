import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { UserPost } from '../user-post.model';
import { UserPostService} from '../user-post.service';
@Component({
  selector: 'app-user-post-detail',
  templateUrl: './user-post-detail.component.html',
  styleUrls: ['./user-post-detail.component.css']
})
export class UserPostDetailComponent implements OnInit {
  userPost: UserPost;
  id: number;

  constructor(private userPostService: UserPostService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.userPost = this.userPostService.getUserPost(this.id);
        }
      );
  }

  // onAddToShoppingList() {
  //   this.userPostService.addIngredientsToShoppingList(this.userPost.ingredients);
  // }


  onDeleteUserPost() {
    this.userPostService.deleteUserPost(this.id);
    this.router.navigate(['/userPosts']);
  }

}