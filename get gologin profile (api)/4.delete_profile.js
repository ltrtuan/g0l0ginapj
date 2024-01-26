var request = require('request');
var options = {
    'method': 'DELETE',
    'url': 'https://api.gologin.com/browser/fsdf4234234sdfsdfsdf',//step 1
    'headers': {
        'Authorization': 'Bearer api_key'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});