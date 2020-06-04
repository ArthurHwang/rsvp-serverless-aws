export {}; //fix for ts(2451)
const AWS = require("aws-sdk");
const ses = new AWS.SES();
const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

AWS.config.update({ region: "us-east-1" });

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  };
}

function generateError(code, err) {
  console.log(err);
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(err.message),
  };
}

function generateEmailParams(data) {
  const first = data.first.S;
  const last = data.last.S;
  const email = data.email.S;
  const coming = data.coming.S;

  let params;

  if (!(email && first && last && coming)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'email', 'first', 'last', 'coming."
    );
  }

  if (coming === "yes") {
    params = {
      Source: myEmail,
      Destination: { ToAddresses: [email] },
      ReplyToAddresses: [myEmail],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Dear ${first} ${last},\n
                   Thank you for taking the time to RSVP.  We both value your time.  \n
                   You will be reminded 1 month prior to the target date.
                   
                    `,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `You received a message from Arthur and Carol - Thank you for the RSVP!`,
        },
      },
    };
  } else {
    params = {
      Source: myEmail,
      Destination: { ToAddresses: [email] },
      ReplyToAddresses: [email],
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Message sent from email ${myEmail} by ${first} ${last} \nContent: hihiihihihi`,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `You received a message from Arthur and Carol`,
        },
      },
    };
  }

  // console.log('---------generate function----------');
  // console.log(params);

  return params;
}

exports.handler = async (event) => {
  console.log("trigger stream was called");

  const eventData = event.Records[0].dynamodb.NewImage;

  // console.log(JSON.parse(eventData));
  // console.log(JSON.stringify(eventData));

  try {
    const emailParams = generateEmailParams(eventData);
    console.log("---------try catch----------");
    console.log(emailParams);
    const data = await ses.sendEmail(emailParams).promise();
    return generateResponse(200, data);
  } catch (err) {
    return generateError(500, err);
  }
};
