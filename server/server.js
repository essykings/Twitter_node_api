const express = require('express');
const Twitter = require('twit');

const app = express();
const client = new Twitter({
  consumer_key: 'Consumer Key Here',
  consumer_secret: 'Consumer  Secret  Here',
  access_token: 'Access Token Here',
  access_token_secret: 'Token  Secret Here'
});


app.use(require('cors')());
app.use(require('body-parser').json());

app.post('/post_tweet', (req, res) => {

  tweet = {status:"Hello world"};
	
    client
      .post(`statuses/update`, tweet)
      .then(timeline => {
        console.log(timeline);
        
        res.send(timeline);
      })

     .catch(error => {
      res.send(error);
    });
      
   
});



app.listen(3000, () => console.log('Server running'));



