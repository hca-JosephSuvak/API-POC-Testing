const callProviderCache = require("./provider-cache.js");

describe('Data Validation - Provider Cache', function () {
    test('Rose Medical Center [Name] Validated in Correct Schema Position', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].name));
        expect(DataExtraction).toBe("Rose Medical Center");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('Rose Medical Center [Location] Validated in Correct Schema Position', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].providerLocationUrlTitle));
        expect(DataExtraction).toBe("rose-medical-center");
    })
    test('Data integrity [Locations]', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].providerLocationUrlTitle));
        expect('Rose-Medical-Center').toEqual(expect.not.stringContaining(DataExtraction));
    })
    test('Data integrity [Name]', async () => {
        let data = await callProviderCache();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].providerLocationUrlTitle));
        expect('rose medical center').toEqual(expect.not.stringContaining(DataExtraction));
        //Line 23 gives an example string and states it should not equal any sequential string value in the value DataExtraction.
    })
}
);
