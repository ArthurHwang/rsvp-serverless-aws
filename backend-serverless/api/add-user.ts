//
// Route: POST /user
//
// export {};
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const moment = require("moment");
// const uuidv4 = require('uuid/v4');
// const util = require('./util');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.GUESTS_TABLE;

exports.handler = async (event) => {
  // console.log(event);
  try {
    let req = JSON.parse(event.body);
    req.timestamp = moment().unix();

    // const dynamoData = {
    //   user_email: req.email,
    //   timestamp: moment().unix(),
    //   first_name: req.firstName,
    //   last_name: req.lastName,
    //   coming: req.coming,
    //   guest_first_name: req.guestFirstName,
    //   guest_last_name: req.guestLastName,
    //   special_requests: req.requests,
    // };

    // console.log(item);

    // let item = event.body;
    // item.user_id = util.getUserId(event.headers);
    // item.user_name = util.getUserName(event.headers);
    // item.user_email = item.user_email;
    // item.node_id = item.user_id + ':' + uuidv4();
    // item.guest_id = uuidv4();
    // item.timestamp = moment().unix();
    // item.expires = moment().add(90, 'days').unix();
    let data = await dynamodb
      .put({
        TableName: tableName,
        Item: req,
      })
      .promise();

    return {
      statusCode: 200,
      // headers: util.getResponseHeaders(),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(req),
    };
  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error",
      }),
    };
  }
};
