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
  const guestFullName =
    guestFirst && guestLast ? `${guestFirst} ${guestLast}` : "";

  function generateCustomFields(text: string, field: string) {
    if (!text) return "";
    switch (field) {
      case "guest":
        return `
                <br />
                <b>Your Plus One's information:</b>         
                <p>${text}</p>`;
      case "requests":
        return `
                <br />
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
               <p>Carol and I would like to thank you for taking time out of your day to register for our wedding.</p>          
               <p>We are thrilled that you are coming.</p>
               <img src="https://sayingimages.com/wp-content/uploads/super-happy-memes.jpg" />
               <p>This is a confirmation message to let you know that you have been stored in our database to be processed for the wedding.</p>          
               
               <p>If you have any questions or concerns about ANYTHING, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP.</p>

               <p>You can also reach me at (714) 280-6188.  Call or text me anytime.</p>

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

               <img src="https://i.pinimg.com/236x/30/3f/02/303f027d32f2eeeeb596ef77be4e10f0.jpg" />
               <p>We are now going to cancel the wedding because you cannot make it...</p> 
               <br />
               <p>Just Kidding!!</p>  
               <p>If you have a change of heart, please fill out the online form again.  Please make sure to use the same email address so that our database can update your entry correctly.</p>
               <a href="https://carolandarthur.com/rsvp">RSVP form</a>

               <br />

               <p>If you have ANY questions or concerns, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP</p>

               <p>You can also reach me at (714) 280-6188.  Call or text me anytime.</p>
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
