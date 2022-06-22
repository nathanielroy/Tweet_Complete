import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { TweetService } from '../_services/tweet.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-view-my-tweets',
  templateUrl: './view-my-tweets.component.html',
  styleUrls: ['./view-my-tweets.component.css'],
})
export class ViewMyTweetsComponent implements OnInit {
  allTweets!: Observable<Tweet[]>;
  id: string | undefined;
  tweet: Tweet | undefined;
  deletetweet: Tweet = new Tweet();
  liketweet: Tweet = new Tweet();
  likebtn = "Like";
    count: number | undefined;
  filterMetadata: any;
  tweetscount: number |undefined;

  constructor(
    private router: Router,
    private tweetService: TweetService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadTweets();
    //this. countTweet()
  }

  reloadData() {
    window.location.reload();
  }

  loadTweets() {
    const user = this.tokenStorageService.getUser();
    this.allTweets = this.tweetService.myTweets(user.username);
    
  /*   this.allTweets.forEach((element) => {
      this.filterMetadata = (<any>element[0].likes)
      console.log(this.filterMetadata.length)
      this.count = this.filterMetadata.length
    }) */
  } 

  getlike(tweets: any) {
   
    this.tweetscount = tweets?.likes.length
     console.log(this.tweetscount)
    //return tweets?.likes.length
  }

/*   loadTweets() {
    const user = this.tokenStorageService.getUser();
    this.allTweets = this.tweetService.myTweets(user.username);
 this.allTweets.forEach((element) => {
       this.filterMetadata = (<any>element[0].likes)
   console.log(this.filterMetadata.length)
   this.count=this.filterMetadata.length
     })   */

    /*  this.allTweets.forEach((element) => {
       console.log("This is explicit: "+((<any>element[0].likes).length))
       this.filterMetadata = ((<any>element[0].likes).length)
       console.log(this.filterMetadata)
     })  */
    /* this.allTweets.forEach((element) => {
      console.log((element[0].likes))
       console.log("Count: "+JSON.stringify(element[0].likes))
     }) */
 // }

/*   countTweet() {
     const user = this.tokenStorageService.getUser();
    this.allTweets = this.tweetService.viewTweets(user.id);
    const qwe = this.allTweets.forEach((element) => {
    this.count=((<any>element[1].likes).length)
    console.log("Count: "+this.count)
    })
  } */

  modifyTweet(_id: string) {
    this.router.navigate(['modify-my-tweet', _id]);
  }

  removeTweet(_id: string) {
    console.log(_id);
    const user = this.tokenStorageService.getUser();
    this.deletetweet.userId = user.id;
    this.deletetweet._id = _id;
    const tweetData = this.deletetweet;
    window.location.reload();
    this.tweetService.deleteTweet(tweetData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  likeTweet(_id: string) {
    const user = this.tokenStorageService.getUser();
   this.liketweet.userId = user.id;
    this.liketweet._id = _id;
    this.tweetService.likeTweet(_id, this.liketweet).subscribe(
      (data) => {
        console.log("data is:" + data);
        if (data == 'The post has been liked') {
           this.likebtn = "Unike"
        } else {
          this.likebtn= 'Like'
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
