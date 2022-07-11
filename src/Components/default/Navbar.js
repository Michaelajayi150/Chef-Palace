import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import Search from "./Search";

function HeroNavbar({ popModal }) {
  const [scrollPos, setScrollPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const lock = useLocation();

  const HandleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPos(pos);
  };

  window.addEventListener("scroll", HandleScroll);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        className={scrollPos >= 80 ? "header fixed" : "header"}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Link className="navbar-brand" to={{ pathname: "/", hash: "" }}>
            <h1>
              {/* <SiIcons.SiChef size="3rem" /> */}
              CHEF P
              <GiIcons.GiKnifeFork style={{ transform: "translateY(2.5px)" }} />
              LACE
            </h1>
          </Link>
          <Navbar className="justify-content-end">
            <Nav className="me-2">
              <Link
                onClick={toggle}
                className="nav-link links"
                to={{ pathname: "/" }}
              >
                <BiIcons.BiHomeSmile size="1.4rem" />
                <span class="links-tag">Home</span>
              </Link>
              <Link
                onClick={popModal}
                className="nav-link links"
                to="/searched/chicken"
              >
                <BiIcons.BiSearch size="1.4rem" />
                <span class="links-tag">Search</span>
              </Link>
              <Link
                onClick={popModal}
                className="nav-link links"
                to={`${lock.pathname}`}
              >
                <BiIcons.BiUser size="1.4rem" />
                <span class="links-tag">Sign in</span>
              </Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}

export default HeroNavbar;
