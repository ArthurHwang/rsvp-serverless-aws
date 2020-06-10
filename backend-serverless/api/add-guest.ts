//
// Route: POST /guest
//
// Default behaviour of dynamodb putItem - if email exists, it will overwrite to an entirely new item.
// Email addresses stored in database will be unique entries.Otherwise, it will insert a new document(Exactly what I need)
//

export {};
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const moment = require("moment");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.GUESTS_TABLE;

exports.handler = async (event: any): Promise<any> => {
  try {
    console.log(event);
    let req = JSON.parse(event.body);
    req.timestamp = moment().unix();

    let data = await dynamodb
      .put({
        TableName: tableName,
        Item: req,
      })
      .promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(req),
    };
  } catch (err) {
    console.log("Error", err);

    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown Error",
      }),
    };
  }
};
