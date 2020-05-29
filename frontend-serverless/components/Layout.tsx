import styled from 'styled-components';
import { Meta } from './Meta';
import { Nav } from './Nav';

import { ReactElement } from 'react';

type Props = {
  children: any;
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

const StyledLayout = styled('main')`
  /* background: white; */
  /* color: ${({ theme }) => theme.black}; */
  height: 100%;

  @media (max-width: 910px) {
    position: relative;
  }
`;
