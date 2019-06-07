const  Twitter = require('twitter');
const config = require('./config.js');

const T = new Twitter(config);

var params = {
  q: '#makersacademy',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

function handleResponseFromTwitter(err,data,response) {
    if(!err){
      console.log(data);
  } else {
    console.error(err);
  }
}

function callTwitter() {
  T.get('search/tweets', params, handleResponseFromTwitter
)};

module.exports = {
  callTwitter: callTwitter
}
