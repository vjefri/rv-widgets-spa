const httpProxy = require('http-proxy');
const url = 'http://spa.tglrw.com:4000';

module.exports = function () {
  console.log('proxy on port 8001');
  const options = {
    changeOrigin: true,
    target: {
      https: true
    }
  };

  httpProxy.createServer(443, url, options).listen(8001);
};
