import { NextPage } from "next";
import styled from "styled-components";

const TechnicalPage: NextPage = () => (
  <StyledTechnical>
    <div className="stack">
      <p className="title">About</p>
      <ul>
        <li>This project is an end-to-end serverless full stack application</li>
        <li>Dedicated to my wife Carol Lee circa 2020</li>
      </ul>
      <p className="title">Technologies used:</p>

      <ul>
        <li>Next.js</li>
        {/* <p>Front end</p> */}
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
  height: 100%;
  color: ${({ theme }) => theme.primary};
  text-align: center;

  .stack {
    ul {
      list-style-type: none;
      padding: 0;
    }
    padding-top: 6rem;
    height: 100%;
    /* margin-top: 6rem; */
    font-size: 2rem;
    font-weight: 700;

    .title {
      font-size: 3rem;
    }
  }
`;
