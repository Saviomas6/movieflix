import React from "react";
import { Link } from "react-router-dom";
import { Container, StyledLink } from "../../styles/sharedStyles";
import {
  Heading,
  Logo,
  LogoWrapper,
  NavbarContainer,
  NavbarMainContainer,
} from "./Navbar.style";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <NavbarMainContainer>
      <Container width="90%">
        <NavbarContainer>
          <StyledLink to="/">
            <LogoWrapper>
              <Logo src={logo} alt="logo" />
            </LogoWrapper>
          </StyledLink>
          <StyledLink to="/">
            <Heading>MovieFlix</Heading>
          </StyledLink>
        </NavbarContainer>
      </Container>
    </NavbarMainContainer>
  );
};

export default Navbar;
