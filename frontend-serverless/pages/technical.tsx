import { NextPage } from "next";
import styled from "styled-components";

const TechnicalPage: NextPage = () => (
  <StyledTechnical>
    <div className="stack">
      <p className="title">About</p>
      <ul>
        <li>Dedicated to my wife Carol Lee</li>
      </ul>
      <p className="title">Technologies used:</p>
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
    </div>
  </StyledTechnical>
);

export default TechnicalPage;

const StyledTechnical = styled("div")`
  background-color: black;
  padding: 6rem 1rem 1rem;
  height: 100%;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  overflow: scroll;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 1.4rem;
    margin-bottom: 0;
  }

  .stack {
    padding-top: 2rem;
    height: 100%;
    font-size: 2rem;
    font-weight: 700;

    .title {
      font-size: 3rem;
      margin-bottom: 0;
      margin: 0;
    }
  }
`;
