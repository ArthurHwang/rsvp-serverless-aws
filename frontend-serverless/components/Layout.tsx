import styled from "styled-components";
import { Meta } from "./Meta";
import { Nav } from "./Nav/Nav";
import { ReactElement } from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }): ReactElement => {
  return (
    <StyledLayout>
      <Meta />
      <Nav />
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled("main")`
  height: 100%;
`;
