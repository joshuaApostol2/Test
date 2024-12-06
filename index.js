const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (!userAgent || userAgent.toLowerCase().includes('sitemode') || userAgent.toLowerCase().includes('bot')) {
    res.status(403).send('<h1>This is a bot</h1>');
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => console.log('Server running on port 3000'));
