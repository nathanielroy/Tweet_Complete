import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ViewMyTweetsComponent } from './view-my-tweets/view-my-tweets.component';
import { ModifyMyTweetsComponent } from './modify-my-tweets/modify-my-tweets.component';
import { ViewTweetsComponent } from './view-tweets/view-tweets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    PostTweetComponent,
    ViewMyTweetsComponent,
    ModifyMyTweetsComponent,
    ViewTweetsComponent,
    ShareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
