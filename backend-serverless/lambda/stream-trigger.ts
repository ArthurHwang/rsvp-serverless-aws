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
  const first = guestEvent.first.S;
  const last = guestEvent.last.S;
  const email = guestEvent.email.S;
  const coming = guestEvent.coming.S;
  const guestFirst = guestEvent.guestFirst ? guestEvent.guestFirst.S : "";
  const guestLast = guestEvent.guestLast ? guestEvent.guestLast.S : "";
  const specialRequests = guestEvent.requests ? guestEvent.requests.S : "";
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
    nodemailerMailgun.sendMail(
      {
        from: `mail@${myDomain}`,
        to: [`${email}`],
        cc: `mail@${myDomain}`,
        subject: "Thank you for registering - Carol and Arthur",
        html: `<b>Dear ${first} ${last},</br>
               <br />    
               <p>Carol and I would like to thank you for taking time out of your day to register for our wedding</p>          
               <p>This is a confirmation message to let you know that you have been stored in our database to be processed for the wedding.</p>          
               
               <p>If you have any questions or concerns about ANYTHING, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP.</p>

               <p>You can also reach me at (714)280-6188.  Call or text me anytime.</p>

               <br />
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
    nodemailerMailgun.sendMail(
      {
        from: `mail@${myDomain}`,
        to: [`${email}`],
        cc: `mail@${myDomain}`,
        subject: "We are sad you cannot come - Carol and Arthur",
        html: `<b>Dear ${first} ${last},</b>
               <br />    
               <p>Carol and I are saddened that you cannot come to our wedding.</p>    
               <p>We are now going to cancel the wedding because you cannot make it...</p> 
               <br />
               <p>Just Kidding!!</p>  
               <p>If you have a change of heart, please fill out the online form again</p>
               <a href="https://carolandarthur.com/rsvp">RSVP form</a>

               <br />

               <p>If you have ANY questions or concerns, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP</p>

               <p>You can also reach me at (714)280-6188.  Call or text me anytime.</p>
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
  }
};
