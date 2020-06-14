### [carolandarthur.com](https://carolandarthur.com)

[![Uptime Robot](https://img.shields.io/uptimerobot/ratio/7/m785282246-941172bcd4158815bd59ae98)](https://carolandarthur.com) [![GitHub issues](https://img.shields.io/github/issues/ArthurHwang/rsvp-serverless-aws)](https://github.com/ArthurHwang/rsvp-serverless-aws/issues) [![GitHub issues closed](https://img.shields.io/github/issues-closed/ArthurHwang/rsvp-serverless-aws)](https://github.com/ArthurHwang/rsvp-serverless-aws/issues?q=is%3Aissue+is%3Aclosed)

### Motivation
As newlyweds, my wife and I started sending out wedding invitations by mail but quickly realized it would be very difficult to keep track of 150+ people all over the world that would be attending our wedding.

So instead, I built a globally distributed serverless full stack application using AWS Lambda@Edge, AWS API Gateway, and AWS DynamoDB so that our family members and friends all over the world could have millisecond access to our wedding RSVP site. The RSVP's are stored in DynamoDB where I can query and scan our attendees data so we can more easily organize our wedding.

I automated response emails by using DynamoDB streams to trigger AWS Lambda functions that generate response emails to user submitted forms.

CI / CD was integrated by building a workflow pipeline using AWS CodeBuild / AWS CodePipeline.  In order to get GitHub commit status badges in this repository, I wrote a custom Lambda to react to cloudwatch events for the build pipeline which lets GitHub know about commits pipeline status build information.

### Technologies Used

- Serverless IaaS Framework
- Next.js
- React
- TypeScript
- Styled Components
- AWS Lambda
- AWS Lambda@Edge
- AWS API Gateway
- AWS DynamoDB
- AWS DynamoDB Streams
- AWS Cloudwatch
- AWS CodeBuild
- AWS CodePipeline
- AWS Route53
- Google Places API
- Google Maps API

[![homepage](https://carolandarthur.com/screenshot-1.png)](https://carolandarthur.com)



