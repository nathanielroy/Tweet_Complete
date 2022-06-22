import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { TweetService } from '../_services/tweet.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.css']
})
export class ViewTweetsComponent implements OnInit {
    allTweets!: Observable<Tweet[]>;
  id: string | undefined;
  tweet: Tweet | undefined;

    constructor(
    private router: Router,
    private tweetService: TweetService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.loadTweets();
  }

  loadTweets() {
    const user = this.tokenStorageService.getUser();
    this.allTweets = this.tweetService.viewTweets(user.id);
  }

}
