const OpenIdClient = require("openid-client");

const identityUrl = "https://app.altruisticidentity.com";
const clientId = "fetch-from-config";
const clientSecret = "fetch-from-config";
const credentialsScope = "platformapiaccess";

async function GetAccessToken() {
    var issuer = await OpenIdClient.Issuer.discover(identityUrl);

    const client = new issuer.Client({
        client_id: clientId,
        client_secret: clientSecret
    });

    const grantResponse = await client.grant({
        grant_type: 'client_credentials',
        scope: credentialsScope,
    });

    const accessToken = grantResponse.access_token
   return console.log(accessToken);
}
GetAccessToken();
//module.exports = new GetAccessToken();