const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use('/user', proxy('http://user-service:4001'));
app.use('/post', proxy('http://post-service:4002'));
app.use('/comment', proxy('http://comment-service:4003'));

app.listen(4000, () => console.log('API Gateway running on port 4000'));