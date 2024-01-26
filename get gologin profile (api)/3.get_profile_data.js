// HTTPS://DOCUMENTER.GETPOSTMAN.COM/view/21126834/Uz5GnvaL#8752bd54-ed20-43f1-af22-b2f58a9d24c4

var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://api.gologin.com/browser/fsdf4234234sdfsdfsdf',//step 1
        'headers': {
            'Authorization': 'Bearer api_key'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body); // download gologin here "s3path":"HTTPs://S3.EU-CENTRAL-1.AMAZONAWS.COM/gprofiles.gologin/zero_profile.zip"
    });