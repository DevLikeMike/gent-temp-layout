import { useState } from "react";
import Link from "next/link";
// Component imports
import Hamburger from "./Hamburger";
// External imports
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100vw;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  padding: 0 8rem;
`;

const NavList = styled.ul`
  height: 3rem;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.789rem;
`;

const NavItem = styled.li`
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 2rem;
  font-size: 1rem;
  display: flex;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }

  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    bottom: 0.5rem;
    width: 0px;
    background-color: ${(props) => props.theme.red};
    height: 3px;
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 2rem;
    }
  }
`;

export default function Header() {
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const openHandler = () => {
    setSideNavigationOpen(!sideNavigationOpen);
  };

  return (
    <Navbar>
      <Title>Photolium.</Title>
      <NavList>
        <NavItem>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/'>
            <a>About</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/'>
            <a>Services</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/'>
            <a>Contact</a>
          </Link>
        </NavItem>

        <Hamburger
          openHandler={openHandler}
          sideNavigationOpen={sideNavigationOpen}
        />
      </NavList>
    </Navbar>
  );
}
