
var axios = require("axios");
/* This is the Axios Config where you add required headers. 
Axios handles the base request automatically with a method and URL.
External Auth requires extra exception handling.*/
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const AUTH_TOKEN = 'token';

var config = {
  method: 'get',
  url: 'https://api-stg.internal.medcity.net/forms-services/api/1.0/form/full/3791543',
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Content-type": "Application/json",
    "Authorization": `Bearer ${AUTH_TOKEN}`
    }   
};

async function FormstackTest() {
  /*Axios needs to be Nested within Promise. 
  Notice it has 2 arguments to the Promise: resolve and reject.
  Presented in order of occurence.*/
  return new Promise((resolve, reject) => {
    axios(config)
      //Then is  a promissory statement. It does this upon initiation.
      .then(function (response) {
        //loggedData variable parses the data into a queriable object.
        var loggedData = response.data;
        //Resolve is the First Callback Function that sends Logged Data
        resolve(loggedData);
      })
      //The catch statement pulls the function.
      .catch(function (error) {
        //Catches errors with the request.
        console.log('HTTP Code: '+ error.status);
        console.log(error);
        //Reject is the second callback funtion we added for returning the error to the test.
        reject(error);
      });
  })

}

//Must be present to insert the promise into it's called function.
module.exports = FormstackTest;