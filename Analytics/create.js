async function APIHandlerOnline() {
  /*Axios needs to be Nested within Promise. 
  Notice it has 2 arguments to the Promise: resolve and reject.
  Presented in order of occurence.*/
  return new Promise((resolve, reject) => {
    axios(config)
      //Then is  a promissory statement. It does this upon initiation.
      .then(function (response) {
        //loggedData variable parses the data into a queriable object.
        var loggedData = response;
        //Resolve is the First Callback Function that sends Logged Data
        console.log(loggedData);
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