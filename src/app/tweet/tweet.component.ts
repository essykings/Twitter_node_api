import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TwitterService } from '../twitter.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    tweetForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

  constructor(private api: TwitterService private formBuilder: FormBuilder) { }

  ngOnInit() {

   this.tweetForm = this.formBuilder.group({
            tweetdata: ['', Validators.required]
        });

  }


  get f() { return this.tweetForm.controls;}

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.tweetForm.invalid) {
            return;
        }

        this.loading = true;
        this.api.tweet(this.f.tweetdata.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("yes")
                    this.loading = false;

                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
