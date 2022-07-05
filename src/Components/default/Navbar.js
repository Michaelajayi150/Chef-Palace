import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

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
          <div className="navbar-toggler">
            {isOpen ? (
              <GiIcons.GiKnifeFork onClick={toggle} size="1.5rem" />
            ) : (
              <FaIcons.FaHamburger onClick={toggle} size="1.5rem" />
            )}
          </div>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={
              !isOpen ? "justify-content-end" : "justify-content-end show"
            }
          >
            <Nav className="me-2">
              <Link
                onClick={toggle}
                className="nav-link"
                to={{ pathname: "/searched/chicken" }}
              >
                Recipes
              </Link>
              <Link
                onClick={toggle}
                className="nav-link"
                to={{ pathname: "/" }}
              >
                About Us
              </Link>
              <Link
                onClick={toggle}
                className="nav-link"
                to={{ pathname: "/" }}
              >
                Blog
              </Link>
              <Search classType="header-search" />
              <Link
                onClick={popModal}
                className="nav-link user-btn"
                to={`${lock.pathname}`}
              >
                <BiIcons.BiUser size="1.4rem" />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeroNavbar;
