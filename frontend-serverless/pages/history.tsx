import styled from "styled-components";
import { MasonryGallery } from "../components/History/MasonryGallery";
import { Story } from "../components/History/Story";
import { NextPage } from "next";

export const AboutPage: NextPage = () => {
  return (
    <StyledAbout>
      <Story />
      <MasonryGallery />
    </StyledAbout>
  );
};

export default AboutPage;

const StyledAbout = styled("div")`
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
