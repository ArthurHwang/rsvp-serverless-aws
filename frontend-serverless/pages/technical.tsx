import { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
const TechnicalPage: NextPage = () => (
  <StyledTechnical>
    <Head>
      <title>Arthur and Carol - Technical Information</title>
      <meta name="description" content="Carol and Arthur - Technical" />
      <link rel="canonical" href="https://carolandarthur.com/technical" />
    </Head>
    <div className="stack">
      <p className="title">About</p>
      <ul style={{ marginBottom: "2rem" }}>
        <li>Dedicated to my wife Carol Lee</li>
      </ul>
      <p className="title">Technologies Used</p>
      <ul>
        <li>Next.js</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Styled Components</li>
        <li>Framer Motion</li>
        <li>Serverless IaaS framework</li>
        <li>AWS Lambda</li>
        <li>AWS Lambda@edge</li>
        <li>AWS API Gateway</li>
        <li>AWS DynamoDB</li>
        <li>AWS DynamoDB Streams</li>
        <li>AWS CloudWatch</li>
        <li>AWS Route53</li>
        <li>AWS CodePipeline / CodeBuild</li>
      </ul>
      <div className="source">
        <a
          target="_blank"
          rel="noopener nofollow"
          href="https://github.com/ArthurHwang/rsvp-serverless-aws"
        >
          SOURCE CODE
        </a>
      </div>
    </div>
  </StyledTechnical>
);

export default TechnicalPage;

const StyledTechnical = styled("div")`
  background-color: #222;
  padding: 6rem 1rem 1rem;
  height: 100%;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  overflow: scroll;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
  }

  li {
    font-size: 1.4rem;
    margin-bottom: 0;
    width: 250px;
  }

  .stack {
    padding-top: 2rem;
    height: 100%;
    font-size: 2rem;
    font-weight: 700;

    .source {
      margin-top: 2rem;
    }

    .title {
      font-size: 3rem;
      margin-bottom: 0;
      margin: 0;
    }
  }
`;
