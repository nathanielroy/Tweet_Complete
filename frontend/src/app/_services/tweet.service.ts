import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';

const API_URL = 'http://localhost:8888/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  constructor(private http: HttpClient) {}

  postTweets(tweet: Tweet): Observable<any> {
    return this.http.post(API_URL + 'post_tweet', tweet);
  }

viewTweets(id: string): Observable<any> {
    return this.http.get(API_URL + `timeline/${id}`);
}
  
  myTweets(username: string): Observable<any> {
    const response = this.http.get(API_URL + `profile/${username}`);
    return response;
  }

  getTweetById(id: string): Observable<any> {
    return this.http.get(API_URL + `${id}`);
  }

likeTweet(_id: string, value: any): Observable<any> {
    return this.http.put(API_URL + `${_id}/like`,value);
}
  
  updateTweet(_id: string, value: any): Observable<any> {
    return this.http.put(API_URL + `${_id}`, value);
  }

  deleteTweet(tweet: Tweet): Observable<any> {
    return this.http.delete(API_URL + `${tweet._id}`);
  }
}
