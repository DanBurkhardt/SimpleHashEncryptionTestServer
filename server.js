const express = require('express');
const request = require('request');
const debug = require('debug')('server.js');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { encrypt, decrypt } = require('simplehashencryption')

// Starter code
const app = express();

const port = process.env.PORT || '4800';

// Basic security through HTTP headers
app.use(helmet());

// Parse only json incoming request bodies
app.use(bodyParser.json())

app.get('/encrypt', (req, res, next) => {
  encrypt(req.query.string)
  .then(function(result){
    console.log(`\n\nplaintext string: ${req.query.string}`)
    resultHash = result
    console.log(`encrypted hash: ${result}\n\n`)
    res.send(result);
  })
  .catch(function(result){
    console.log(result)
    res.send(result);
  })
})

app.get('/decrypt', (req, res, next) => {
  decrypt(req.query.string)
  .then(function(result){
    console.log(`\n\nencrypted hash: ${req.query.string}`)
    resultHash = result
    console.log(`decrypted string: ${result}\n\n`)
    res.send(result);
  })
  .catch(function(result){
    console.log(result)
    res.send(result);
  })
})

// Sample to make HTTP calls using request
app.get('/test', (req, res, next) => {
  const options = {
    url: 'https://<valid_url_here>',
    method: 'GET',
    headers: {
    'User-Agent': 'request'
    },
    json: true,
    insecure: true
  };

  request(options,
    (error, response, body) => {
    // Print the response status code if a response was received
    // console.log('statusCode:', response && response.statusCode);
    // Print the JSON response.
    // console.log('body:', body);
    if(parseInt(response.statusCode, 10) === 200 && !error) {
      return res.send(body);
    }
    // Print the error if one occurred
    // console.error('error:', error);
    res.send(error);
  });
});

app.listen(port, () => {
  debug(`express server listening on port ${port}`);
});
