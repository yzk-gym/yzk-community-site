const FIRESTORE = require('../src/assets/javascript/firebase');

exports.handler = function (event, context, callback) {
  const EVENT_ID = event.queryStringParameters.path;
  console.log(FIRESTORE.collection('events'));
  callback(null, {
    statusCode: 200,
    body: `<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>YZKAMP</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="YZKAMP" />
    <meta property="twitter:description" content="やってみたいを、やってみよう。" />
    <meta property="og:url" content="https://yzkamp.netlify.com" />
    <meta property="og:image" content="https://yzkamp.netlify.com/static/img/yzkamp_ogp.jpg" />
    <meta http-equiv="refresh" content="0; URL='https://yzkamp.netlify.com/#/events/${EVENT_ID}'" />
  </head>
</html>`,
  });
};
