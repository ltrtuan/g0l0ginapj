//HTTPS://DOCUMENTER.GETPOSTMAN.COM/view/21126834/Uz5GnvaL#580b9a8d-b632-4464-b90f-ad3e787eaf7b

var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'http://localhost:36912/browser/start-profile',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "profileId": "fsdf4234234sdfsdfsdf",//step 1
            "sync": false
        })
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });