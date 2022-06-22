import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ViewMyTweetsComponent } from './view-my-tweets/view-my-tweets.component';
import { ModifyMyTweetsComponent } from './modify-my-tweets/modify-my-tweets.component';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  //tweet
  { path: 'post-tweet', component: PostTweetComponent },
   { path: 'view-tweets', component: ViewTweetsComponent },
  { path: 'my-tweets', component: ViewMyTweetsComponent },
  { path: 'modify-my-tweet/:_id', component: ModifyMyTweetsComponent },

  { path: 'share', component: ShareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
