// import styled from 'styled-components';
import { ReactElement, FC, useState, useEffect } from "react";
// import { RiMenu3Line } from 'react-icons/ri';
import { NavFull } from "./NavFull";
import { NavMobile } from "./NavMobile";
import { useRouter } from "next/router";

export const Nav: FC = (): ReactElement => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavFull path={router.pathname} scrolled={scrolled} />
      <NavMobile path={router.pathname} scrolled={scrolled} />
    </>
  );
};
