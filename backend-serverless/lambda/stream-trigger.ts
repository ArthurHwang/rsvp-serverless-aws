const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

const auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: myDomain,
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

function sendResponseEmail(guestEvent) {
  console.log("FUNCTION BODY");
  const first = guestEvent.first.S;
  const last = guestEvent.last.S;
  const email = guestEvent.email.S;
  const coming = guestEvent.coming.S;
  const guestFirst = guestEvent.guestFirst ? guestEvent.guestFirst.S : null;
  const guestLast = guestEvent.guestLast ? guestEvent.guestLast.S : null;
  const specialRequests = guestEvent.requests ? guestEvent.requests.S : null;

  const guestFullName = `${guestFirst} ${guestLast}`;

  function generateCustomFields(text: string, field: string) {
    if (!text) return null;
    switch (field) {
      case "guest":
        return `
                <br />
                <b>Your Plus One's information:</br>         
                <p>${text}</p>`;
      case "requests":
        return `
                <b>Your Special Requests:</b>          
                <p>${text}</p>`;
    }
  }

  if (coming === "yes") {
    console.log("YES BLOCK");
    nodemailerMailgun.sendMail(
      {
        from: `mail@${myDomain}`,
        to: [`${email}`],
        cc: `mail@${myDomain}`,
        subject: "Thank you for registering - Carol and Arthur",
        html: `<b>Dear ${first} ${last},</br>
               <br />    
               <p>Carol and I would like to thank you for taking time out of your day to register for our wedding</p>          
               <p>This is a confirmation message to let you know that you have been stored in our database to be processed for the wedding</p>
               <b>If you have any additional questions about anything, please reply to this email to start a chat with me.</b>  

               ${generateCustomFields(guestFullName, "guest")}
               <br />
               ${generateCustomFields(specialRequests, "requests")}
               `,
      },
      (err: any, info: any) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log("Email Sent");
        }
      }
    );
  } else {
    console.log("NO BLOCK");
    nodemailerMailgun.sendMail(
      {
        from: `mail@${myDomain}`,
        to: [`${email}`],
        cc: `mail@${myDomain}`,
        subject: "We are sad you cannot come - Carol and Arthur",
        html: `<b>Dear ${first} ${last},</br>
               <br />    
               <p>SO SAD NIGGA</b>       
               `,
      },
      (err: any, info: any) => {
        if (err) {
          throw new Error(err);
        } else {
          console.log("Email Sent");
        }
      }
    );
  }
}

exports.handler = (event, context, callback) => {
  console.log("trigger stream was called");

  const eventData = event.Records[0].dynamodb.NewImage;

  console.log(eventData);

  try {
    sendResponseEmail(eventData);
    callback(null, {
      statusCode: 200,
      body: "Email Successfully Sent",
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(err),
    });
    // console.log(err);
  }
};
