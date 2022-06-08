import { Container, Nav } from "react-bootstrap";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterFlex,
  FooterShare,
  GoTop,
} from "../Styles/FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <GoTop>
          <BsIcons.BsArrow90DegUp />
        </GoTop>
        <FooterFlex>
          <div>
            <FooterShare>
              <a href="paol">
                <BsIcons.BsInstagram size="1.4rem" />
              </a>
              <a href="paol">
                <BsIcons.BsFacebook size="1.4rem" />
              </a>
              <a href="paol">
                <BsIcons.BsWhatsapp size="1.4rem" />
              </a>
              <a href="paol">
                <BsIcons.BsLinkedin size="1.4rem" />
              </a>
              <a href="paol">
                <BsIcons.BsTwitter size="1.4rem" />
              </a>
            </FooterShare>
            <Nav className="me-2">
              <Link to={{ pathname: "/" }}>All Categories</Link>
              <Link to={{ pathname: "/" }}>About Us</Link>
              <Link to={{ pathname: "/blog" }}>Blog</Link>
            </Nav>
          </div>

          <div>
            <h1>
              {/* <SiIcons.SiChef size="3rem" /> */}
              CHEF P
              <GiIcons.GiKnifeFork style={{ transform: "translateY(2.5px)" }} />
              LACE
            </h1>
            <div className="copyright">
              &copy; 2022 CHEF PALACE <br />
              All rights reserved.
            </div>
          </div>
        </FooterFlex>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
