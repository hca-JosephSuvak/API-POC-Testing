const formstackAPI = require("./Formstack.js");

describe('Formstack Validation - Data Checks', function () {
    test('Submitted Successfully to Formstack', async () => {
        let data = await formstackAPI();
        var DataExtraction = JSON.parse(JSON.stringify(data.data[80].name));
        expect(DataExtraction).toBe("Rose Medical Center");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
}
);
