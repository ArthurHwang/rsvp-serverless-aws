exports.handler = (event, context, callback) => {
  console.log("trigger stream was called");

  const eventData = event.Records[0];

  console.log(eventData);

  callback(null, null);
};
