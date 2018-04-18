'use strict'

const mysql = require('mysql');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

AWS.config.region = 'us-east-1';


module.exports.powerball = (event, context, callback) => {
  console.log('Entered powerball')
  console.log('event')
  console.log(JSON.stringify(event,null,2))

  // INFO decided to discontinue coding of this since nobody is using this functionality

  let powerballInfo = {
    description: 'Powerball Information',
    statusCode: 200
  }

  callback(null, powerballInfo)
}
