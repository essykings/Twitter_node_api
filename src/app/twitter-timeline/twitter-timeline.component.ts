import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TwitterService } from '../twitter.service';




@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css']
})


export class TwitterTimelineComponent implements OnInit {
  
  myTimeline: any;

  

  constructor(private api: TwitterService) { }

 
  ngOnInit() {
   this.getTwitterTimeline();
 
  }
  
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
   }
  
}
