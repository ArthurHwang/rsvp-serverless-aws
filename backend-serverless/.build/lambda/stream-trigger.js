var nodemailer = require("nodemailer");
var mg = require("nodemailer-mailgun-transport");
var myEmail = process.env.EMAIL;
var myDomain = process.env.DOMAIN;
var auth = {
  auth: {
    api_key: process.env.MAILGUN_APIKEY,
    domain: myDomain,
  },
};
var nodemailerMailgun = nodemailer.createTransport(mg(auth));
function sendResponseEmail(guestEvent) {
  var first = guestEvent.first.S;
  var last = guestEvent.last.S;
  var email = guestEvent.email.S;
  var coming = guestEvent.coming.S;
  var guestFirst = guestEvent.guestFirst ? guestEvent.guestFirst.S : "";
  var guestLast = guestEvent.guestLast ? guestEvent.guestLast.S : "";
  var specialRequests = guestEvent.requests ? guestEvent.requests.S : "";
  var guestFullName =
    guestFirst && guestLast ? guestFirst + " " + guestLast : "";
  function generateCustomFields(text, field) {
    if (!text) return "";
    switch (field) {
      case "guest":
        return (
          "\n                <br />\n                <b>Your Plus One's information:</b>         \n                <p>" +
          text +
          "</p>"
        );
      case "requests":
        return (
          "\n                <br />\n                <b>Your Special Requests:</b>          \n                <p>" +
          text +
          "</p>"
        );
    }
  }
  if (coming === "yes") {
    nodemailerMailgun.sendMail(
      {
        from: "mail@" + myDomain,
        to: ["" + email],
        cc: "mail@" + myDomain,
        subject: "Thank you for registering - Carol and Arthur",
        html:
          "<b>Dear " +
          first +
          " " +
          last +
          ',</br>\n               <br />    \n               <p>Carol and I would like to thank you for taking time out of your day to register for our wedding.</p>          \n               <p>We are thrilled that you are coming.</p>\n               <img src="https://sayingimages.com/wp-content/uploads/super-happy-memes.jpg" />\n               <p>This is a confirmation message to let you know that you have been stored in our database to be processed for the wedding.</p>          \n               \n               <p>If you have any questions or concerns about ANYTHING, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP.</p>\n\n               <p>You can also reach me at (714) 280-6188.  Call or text me anytime.</p>\n\n               <br />\n               ' +
          generateCustomFields(guestFullName, "guest") +
          "\n               <br />\n               " +
          generateCustomFields(specialRequests, "requests") +
          "\n               ",
      },
      function (err, info) {
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
        from: "mail@" + myDomain,
        to: ["" + email],
        cc: "mail@" + myDomain,
        subject: "We are sad you cannot come - Carol and Arthur",
        html:
          "<b>Dear " +
          first +
          " " +
          last +
          ',</b>\n               <br />    \n               <p>Carol and I are saddened that you cannot come to our wedding.</p>    \n\n               <img src="https://i.pinimg.com/236x/30/3f/02/303f027d32f2eeeeb596ef77be4e10f0.jpg" />\n               <p>We are now going to cancel the wedding because you cannot make it...</p> \n               <br />\n               <p>Just Kidding!!</p>  \n               <p>If you have a change of heart, please fill out the online form again.  Please make sure to use the same email address so that our database can update your entry correctly.</p>\n               <a href="https://carolandarthur.com/rsvp">RSVP form</a>\n\n               <br />\n\n               <p>If you have ANY questions or concerns, simply reply to this email to start a chat thread.  Carol or I will get back to you ASAP</p>\n\n               <p>You can also reach me at (714) 280-6188.  Call or text me anytime.</p>\n               ',
      },
      function (err, info) {
        if (err) {
          throw new Error(err);
        } else {
          console.log("Email Sent");
        }
      }
    );
  }
}
exports.handler = function (event, context, callback) {
  console.log("trigger stream was called");
  var eventData = event.Records[0].dynamodb.NewImage;
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
//# sourceMappingURL=stream-trigger.js.map
