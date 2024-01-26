// https://documenter.getpostman.com/view/21126834/Uz5GnvaL#6bc29e20-ec02-46d5-8b98-0c1c5b6f0b37
var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://api.gologin.com/browser',
        'headers': {
            'Authorization': 'Bearer api_key',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name":"string","notes":"string","browserType":"chrome","os":"lin","startUrl":"string","googleServicesEnabled":false,"lockEnabled":false,"debugMode":false,"navigator":{"userAgent":"string","resolution":"string","language":"string","platform":"string","doNotTrack":false,"hardwareConcurrency":0,"deviceMemory":1,"maxTouchPoints":0},"geoProxyInfo":{},"storage":{"local":true,"extensions":true,"bookmarks":true,"history":true,"passwords":true,"session":true},"proxyEnabled":false,"proxy":{"mode":"http","host":"string","port":0,"username":"string","password":"string","connectionType":"string","trafficLimit":0,"trafficUsed":"string","fakeProxyId":"string"},"dns":"string","plugins":{"enableVulnerable":true,"enableFlash":true},"timezone":{"enabled":true,"fillBasedOnIp":true,"timezone":"string"},"audioContext":{"mode":"off","noise":0},"canvas":{"mode":"off","noise":0},"fonts":{"families":["string"],"enableMasking":true,"enableDomRect":true},"mediaDevices":{"videoInputs":0,"audioInputs":0,"audioOutputs":0,"enableMasking":false},"webRTC":{"mode":"alerted","enabled":true,"customize":true,"localIpMasking":false,"fillBasedOnIp":true,"publicIp":"string","localIps":["string"]},"webGL":{"mode":"noise","getClientRectsNoise":0,"noise":0},"clientRects":{"mode":"noise","noise":0},"webGLMetadata":{"mode":"mask","vendor":"string","renderer":"string"},"webglParams":[],"profile":"string","googleClientId":"string","updateExtensions":true,"chromeExtensions":["string"]})
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      console.log(response.body.id);
    });