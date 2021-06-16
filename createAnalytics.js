const { rejects } = require('assert/strict');
const fs = require('fs');
const analyticsInit = require("./InitAnalyticsRequest.js");

async function createAnalytics(){
    return new Promise((resolve,err)=>{
    let data = await analyticsInit;
    fs.writeFile("./Analytics/create.js", data, function (err){
        if(err) {
            return console.error(err);
        }
    });
    resolve(data);

    if(resolve === false){
    rejects(err);}
})};

createAnalytics();
