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

describe('Data Validation - Provider Cache', function () {
    test('Rose Medical Center [Name] Validated in Correct Schema Position', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].name));
        console.log(DataExtraction); 
        expect(DataExtraction).toBe("Rose Medical Center");
    })
    test('Rose Medical Center [Location] Validated in Correct Schema Position', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].providerLocationUrlTitle));
        expect(DataExtraction).toBe("rose-medical-center");
    })
}
);

```

### Findings So Far [JEST]:
Testing with the JEST Framework is Possible. The efficacy has yet to be determined for purposes of Analytics/ Clinical Trial/Provider Cache API Regression testing.

### Anticipatory Process Issues [JEST]:
To be determined is parsing this response to a document. Current Theory inolves usage of Azure Pipeline or gitHub extensions to create a report that exports immediately along the pipeline. 
