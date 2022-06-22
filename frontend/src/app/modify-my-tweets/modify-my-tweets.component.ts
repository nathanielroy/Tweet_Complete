import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { TweetService } from '../_services/tweet.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-modify-my-tweets',
  templateUrl: './modify-my-tweets.component.html',
  styleUrls: ['./modify-my-tweets.component.css'],
})
export class ModifyMyTweetsComponent implements OnInit {
  id!: string;
  tweet!: Tweet;

  constructor(
    private tweetService: TweetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tweet = new Tweet();

    this.id = this.route.snapshot.params['_id'];

    this.tweetService.getTweetById(this.id).subscribe(
      (data) => {
        this.tweet = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTweet() {
    this.tweetService.updateTweet(this.id, this.tweet).subscribe(
      (data) => {
        console.log(data);
        this.tweet = new Tweet();
        this.router.navigate(['my-tweets']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
