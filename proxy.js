const httpProxy = require('http-proxy');
const url = 'http://spa.tglrw.com:4000';
const https = require('https');

module.exports = function () {
  console.log('proxy on port 8001');

  httpProxy.createProxyServer({
    target: 'https://spa.tglrw.com:4000',
    agent: https.globalAgent,
    headers: {
      host: 'spa.tglrw.com'
    }
  }).listen(8001);
};
