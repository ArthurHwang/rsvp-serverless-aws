// //
// // Route: GET /user
// //
// export {};
// const AWS = require('aws-sdk');
// AWS.config.update({ region: 'us-west-1' });

// const util = require('./util');

// const dynamodb = new AWS.DynamoDB.DocumentClient();
// const tableName = process.env.USERS_TABLE;

// exports.handler = async (event) => {
//   try {
//     return {
//       statusCode: 200,
//       headers: util.getResponseHeaders(),
//       body: JSON.stringify(''),
//     };
//   } catch (err) {
//     console.log('Error', err);

//     return {
//       statusCode: err.statusCode ? err.statusCode : 500,
//       headers: util.getResponseHeaders(),
//       body: JSON.stringify({
//         error: err.name ? err.name : 'Exception',
//         message: err.message ? err.message : 'Unknown Error',
//       }),
//     };
//   }
// };
