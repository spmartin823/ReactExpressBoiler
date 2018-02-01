const request = require('request');
const { SAMPLE_API_KEY } = require('../../config/SAMPLE_API_KEY')

const logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};


module.exports = {
  logger, 
};