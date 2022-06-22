import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  allFriends: any

  constructor(private token: TokenStorageService,private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.loadTweets();
  }

  loadTweets() {
    const user = this.token.getUser();
    this.allFriends = this.userService.getFriends(user.id).subscribe(
      (data) => {
        console.log("Data" + data);
        this.allFriends = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
