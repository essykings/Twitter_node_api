import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TwitterService } from '../twitter.service';



@Component({
  selector: 'app-twitter-mentions',
  templateUrl: './twitter-mentions.component.html',
  styleUrls: ['./twitter-mentions.component.css']
})

export class TwitterMentionsComponent implements OnInit {
  
  myMentions: any;

  

  constructor(private api: TwitterService) { }

 
  ngOnInit() {
   this.getTwitterMentions();
   
  }
  
  getTwitterMentions(): void {
    this.api.getTimeline()
      .subscribe(
        myMentions => {
          this.myMentions = myMentions;
          console.log(this.myMentions);
        }
      )
   }
  
}
