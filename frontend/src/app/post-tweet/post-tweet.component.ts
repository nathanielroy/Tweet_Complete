import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { TweetService } from '../_services/tweet.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css'],
})
export class PostTweetComponent implements OnInit {
  tweet: Tweet = new Tweet();
  errorMessage: string | undefined;
  tweetTyped: any;
  message = '';

  constructor(
    private router: Router,
    private tweetService: TweetService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {}

  onPostTweet() {
    const user = this.tokenStorageService.getUser();
    this.tweet.userId = user.id;
    this.tweet.username = user.username;
    this.tweet.desc = this.tweetTyped;
    window.location.reload();
    this.tweetService.postTweets(this.tweet).subscribe(
      (data) => {
        console.log(data);
        this.message = 'Tweet added';
      },
      (error) => {
        console.log(error);
        this.message = 'Tweet not added. Error in adding the tweet.';
      }
    );
  }
}
