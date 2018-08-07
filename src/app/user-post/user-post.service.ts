import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserPost } from './user-post.model';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class UserPostService {
  userPostsChanged = new Subject<UserPost[]>();

  private userPosts: UserPost[] = [
    new UserPost(
      'Hello',
      'I am a doggy dog',
      'https://pbs.twimg.com/profile_images/943933166015803392/jvjasD7v_400x400.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new UserPost('Big Fat Burger',
      'What else you need to say?',
      'https://www.petguide.com/wp-content/uploads/2015/01/fat-dog.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  // constructor(private slService: ShoppingListService) {}

  setUserPosts(userPosts: UserPost[]) {
    this.userPosts = userPosts;
    this.userPostsChanged.next(this.userPosts.slice());
  }

  getUserPosts() {
    return this.userPosts.slice();
  }

  getUserPost(index: number) {
    return this.userPosts[index];
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }

  addUserPost(userPost: UserPost) {
    this.userPosts.push(userPost);
    this.userPostsChanged.next(this.userPosts.slice());
  }

  updateUserPost(index: number, newUserPost: UserPost) {
    this.userPosts[index] = newUserPost;
    this.userPostsChanged.next(this.userPosts.slice());
  }

  deleteUserPost(index: number) {
    this.userPosts.splice(index, 1);
    this.userPostsChanged.next(this.userPosts.slice());
  }
}
