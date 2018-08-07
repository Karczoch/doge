import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { UserPostService } from '../user-post/user-post.service';
import { UserPost } from '../user-post/user-post.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private userPostService: UserPostService) {}

  storeUserPost() {
    return this.http.put('https://koko-dcf40.firebaseio.com/user-posts.json', this.userPostService.getUserPosts());
  }

  getUserPosts() {
    this.http.get('https://koko-dcf40.firebaseio.com/user-posts.json')
      .map(
        (response: Response) => {
          const userPosts: UserPost[] = response.json();
          for (let userPost of userPosts) {
            if (!userPost['ingredients']) {
              userPost['ingredients'] = [];
            }
          }
          return userPosts;
        }
      )
      .subscribe(
        (userPosts: UserPost[]) => {
          this.userPostService.setUserPosts(userPosts);
        }
      );
  }
}