var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://core.secure.ehc.com/content/provider-cache'
};

axios(config)
.then(function (response) {
  let x = 1
  while (x < 200) {
    console.log(JSON.stringify(response.data.data[x].providerLocationUrlTitle) + ' is the URL Title for ' +JSON.stringify(response.data.data[x].name));
    x++
  }

})
.catch(function (error) {
  console.log(error);
}); 