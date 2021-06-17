# API Proof Of Concept Overview
Node.js - Proof of Concept for different request frameworks

## Axios Request Overview 

``` Javascript

var axios = require("axios");
var config = {
  method: 'get',
  url: 'yourURL'
};

async function callYourAPI() {
  return new Promise((resolve, reject) => {
    axios(config)
      .then(function (response) {
        var loggedData = JSON.parse(JSON.stringify(response.data));
        resolve(loggedData);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  })

}

module.exports = callYourAPI;
```

## Jest Request Overview 

``` Javascript
const yourCallbackVariable = require("insert-your-filePath-here");

describe('Small Text Description of your Test Suite + Needs', function () {
    test('Description of what your testing', async () => {
        let data = await yourCallbackVariable();
        var DataExtraction = JSON.parse(JSON.stringify(data.path[x-object-number]));
        console.log(DataExtraction); 
        expect(DataExtraction).toBe("Your String");
    })
    test('Description of what your testing', async () => {
       let data = await yourCallbackVariable();
       var DataExtraction = JSON.parse(JSON.stringify(data.path[x-object-number]));
       expect(DataExtraction).toBe("Your String");
    })
}
);

```

### Findings So Far [JEST]:
Testing with the JEST Framework is Possible. The efficacy has yet to be determined for purposes of Analytics/ Clinical Trial/Provider Cache API Regression testing.

### Anticipatory Process Issues [JEST]:
To be determined is parsing this response to a document. Current Theory inolves usage of Azure Pipeline or gitHub extensions to create a report that exports immediately along the pipeline. 

### How to Run JEST

After installing, and navigating to that directory, enter the following command into the terminal to run all suites:
```Javascript
npm test
```

To run a singular test:
[Example: Filename holding test is 'FindCare-Analytics.spec.js']
```Javascript
npm test FindCare-Analytics
```

### Development Materials [JEST]:
- Test Setup/Teardown - [How to setup in test](https://jestjs.io/docs/setup-teardown)
- Expect Functions [Data/Code Matching](https://jestjs.io/docs/expect)
- JEST Matching - [Common Use](https://jestjs.io/docs/using-matchers)
- Testing Async Functions [Functions that wait for Data to be returned](https://jestjs.io/docs/asynchronous)
- Testing REACT -[For use with REACT applications; Sitecore use](https://testing-library.com/docs/react-testing-library/example-intro/)
- Snapshot Tests - [Tests an entire page's source code vs. the updated page](https://jestjs.io/docs/snapshot-testing)
