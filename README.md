### Makers Bot!


#### To run:

* Install node with `brew install node`
* Install library dependencies with `npm install`
* Run the script with `node index.js`
* Run the tests with `npm test`

```
  As a manager,
  so that I can keep up to date with what is being said about the
  company on social media
  I would like to receive a text message of tweets with #mackersacademy in the hashtag
```

```
  As a manager,
  so that I can see just relevant details
  I would only like to see original tweets with the text, user and creation time.
```


#### Implementation hints:

* You will need to use the Twitter API and the Twilio (or any other texting service api for this).
* There is a `config.example.js` file which has the fields needed for the twitter

```
  As a manager,
  so that I never miss a tweet
  I would like tweets to be texted on a regular schedule (every day or so)
```

#### Implementation details:

* This can be achieved by using Google cloud function or an AWS lambda. Be
very **careful** that api keys are kept secret!

```
  As a manager,
  so that I am not notified unduly
  I only want to see a post if there are new tweets available.
```
#### Implementation details:

* This one is slightly harder. If you don't get time to implement this
try and diagram what a solution could look like.


#### Skills needed:

* The call to the Twitter API uses something called a callback.
