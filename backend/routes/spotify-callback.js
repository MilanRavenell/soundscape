const express = require('express');
// import queryString from 'query-string';
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('query: ', req.query);
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' + 'hi')
      // queryString.stringify({
      //   error: 'state_mismatch'
      // }));
  } else {
    const accessTokenResponse = (await axios.post(
      'https://accounts.spotify.com/api/token',
      {
        code: code,
        redirect_uri: 'http://localhost:3000/spotify-callback',
        grant_type: 'authorization_code'
      },
      {
        headers: {
          'Authorization': 'Basic ' + (new Buffer.from('43bfe982f35949b793aa78aac13b784b' + ':' + '0867681fab8d40a9baf736afd4b659f4').toString('base64')),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )).data;
    console.log('accessTokenResponse: ', accessTokenResponse)
    res.redirect('http://localhost:19006/?accessToken=' + accessTokenResponse.access_token)
  }
});

module.exports = router;
