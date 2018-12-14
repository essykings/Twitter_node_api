import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TwitterService } from './twitter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TweetComponent } from './tweet/tweet.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule,MatIconModule,MatCardModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


const appRoutes: Routes = [
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_mentions',
    component: TwitterMentionsComponent
  },

  {
    path: 'tweets',
    component: TweetComponent
  },


  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TwitterTimelineComponent,
    TwitterMentionsComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
