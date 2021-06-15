//Names the test request from Index.js Call Provider Cache and states it's origin.
const callProviderCache = require("./index.js");

describe('Data Validation - Provider Cache', function () {
    test('Rose Medical Center [Name] Validated in Correct Schema Position', async () => {
        //Must specify await of Provider Cache in Every Test.
        let data = await callProviderCache();
        //Targets the Object & Value containing that JSON object.
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].name));
        console.log(DataExtraction);
        //This is a Console for the Position. This represents the information you would validate in Postman. 
        expect(DataExtraction).toBe("Rose Medical Center");
    })
    test('Rose Medical Center [Location] Validated in Correct Schema Position', async () => {
        //Must specify await of Provider Cache in Every Test.
        let data = await callProviderCache();
        //Targets the Object & Value containing that JSON object.
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].providerLocationUrlTitle));
        //This is a Console for the Position.
        console.log(DataExtraction);
        //This is a Console for the Position. This represents the information you would validate in Postman. 
        expect(DataExtraction).toBe("rose-medical-center");
    })
}
);
