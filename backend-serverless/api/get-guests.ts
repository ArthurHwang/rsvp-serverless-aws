//
// Route: GET /guests
//

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const moment = require("moment");

const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.GUESTS_TABLE;

exports.handler = async (_event: any): Promise<any> => {
  try {
    let data = await dynamodb
      .scan({
        TableName: tableName,
      })
      .promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(data),
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
