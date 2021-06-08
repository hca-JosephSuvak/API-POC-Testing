# API-POC-Testing
Node.js - Proof of Concept for different request frameworks

## Axios Overview 

``` Javascript

var axios = require('axios');

var config = {
  method: 'get',
  url: 'your URL'
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data + the path to your variable) 
})
.catch(function (error) {
  console.log(error);
}); 
```
