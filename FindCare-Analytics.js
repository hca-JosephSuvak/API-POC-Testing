
var axios = require("axios");
/* This is the Axios Config where you add required headers. 
Axios handles the base request automatically with a method and URL.
External Auth requires extra exception handling.*/
var config = {
  method: 'get',
  url: 'https://medicalcityhealthcare.com/api/content/render/false/type/json/query/+contentType:Feature%20-Feature.cssSelector:na%20-Feature.status:*obsolete*%20+languageId:1%20+deleted:false%20+live:true%20+working:true/orderby/modDate%20desc/limit/400'
};

async function APIHandlerOnline() {
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
        console.log(error);
        //Reject is the second callback funtion we added for returning the error to the test.
        reject(error);
      });
  })

}

//Must be present to insert the promise into it's called function.
module.exports = APIHandlerOnline;