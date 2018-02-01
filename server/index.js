const express = require('express');
let path = require('path');
const bodyParser = require('body-parser');
const { 
        logger,   
      } = require('./util')

const app = express();

// Middleware
app.use(logger);
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

// Routes 
// take campaignId in here so that the amount of data sent back and loaded for 
// each page. 
// sample: app.get('/api/investments/:campaignId', getInvestmentData);


// Fallback route for react router.
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`) );

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));