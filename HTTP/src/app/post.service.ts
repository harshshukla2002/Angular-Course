import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(postData: { title: string; content: string }) {
    return this.http.post<{ name: string }>(
      'https://angular-test-backend-b368b-default-rtdb.firebaseio.com/post.json',
      postData,
      {
        observe: 'response',
      }
    );
  }

  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-test-backend-b368b-default-rtdb.firebaseio.com/post.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }

          return postsArray;
        })
      );
  }

  deletePost() {
    return this.http.delete(
      'https://angular-test-backend-b368b-default-rtdb.firebaseio.com/post.json'
    );
  }
}
