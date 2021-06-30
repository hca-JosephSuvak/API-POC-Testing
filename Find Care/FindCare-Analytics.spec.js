const callAnalyticsMedicalCity = require("./FindCare-Analytics.js");

describe('Data Retrieval - Medical City Analytics [Type]', function () {
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[0].type1));
        expect(DataExtraction).toBe("syndicated");
        
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[1].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[2].type1));
        expect(DataExtraction).toBe("app");
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[3].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[3].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[4].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[5].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[6].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[7].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[8].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[9].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[10].type1));
        expect(DataExtraction).toBe("widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[11].type1));
        expect(DataExtraction).toBe("app");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[12].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[13].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[14].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[15].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[16].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[17].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[18].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[19].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[20].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[21].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[22].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[23].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[24].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[25].type1));
        expect(DataExtraction).toBe("wss");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
}
);
describe('Data Retrieval - Medical City Analytics [TechDocs] ', function () {
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        /* To view a part of the code, reference the number of the object in the JSON [x]:
        console.log(JSON.parse(JSON.stringify(data.contentlets[0]))); */
        //intentionally wrong to display expected/ recieved.
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[0].type1));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/syndicated-content-privacy-notice");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[1].techdoc));
        expect(DataExtraction).toBe("n/a");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[2].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/hut-blog-app");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[3].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/formstack-widget");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[4].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/image-gallery");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[5].techdoc));
        expect(DataExtraction).toBe("n/a");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[6].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/alert-cards/v1/snippet.dot");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[7].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/our-specialties");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[8].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/marketing-campaign");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[9].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/featured-classes-and-events");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[10].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/facility-spotlight");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[11].techdoc));
        expect(DataExtraction).toBe("https://techdocs.ehc.com/docs/homepage-app");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[12].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/qa-video-gallery/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[13].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/podcast/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[14].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/crm-calendar-pull/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[15].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/timeline-scroller/v1/demo.dot");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[16].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/stroke-risk-profiler/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[17].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/scroller-widget/v2/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[18].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/due-date-calculator/v1/demo.dot");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[19].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/testimonial-gallery/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[20].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/diabetes-hra/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[21].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/dasi-calculator/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[22].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/countdown-clock/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[23].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/amenities-picker/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[24].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/guest-access/v1/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
    test('App Type is equal to expected Value', async () => {
        let data = await callAnalyticsMedicalCity();
        var DataExtraction = JSON.parse(JSON.stringify(data.contentlets[25].techdoc));
        expect(DataExtraction).toBe("https://web-q-hospital.prod.ehc.com/global/hut/widgets/zip-code-finder/");
        //Line 7 verifies the exact match [using toBe command] for this Data Value.
    })
}
);