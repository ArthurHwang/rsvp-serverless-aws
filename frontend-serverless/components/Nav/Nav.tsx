// import styled from 'styled-components';
import { ReactElement, FC } from "react";
// import { RiMenu3Line } from 'react-icons/ri';
import { NavFull } from "./NavFull";
import { NavMobile } from "./NavMobile";
import { useRouter } from "next/router";

export const Nav: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <>
      <NavFull path={router.pathname} />
      <NavMobile path={router.pathname} />
    </>
  );
};
