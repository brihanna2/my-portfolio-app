import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { TbCodePlus } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <Nav
        className="navbar"
        scrolled={scrolled}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <TbCodePlus className="nav-logo-icon" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                exact
                to="/#about"
                activeClassName="active"
                className="nav-links"
                scroll={(el) => scrollWithOffset(el, 90)}
                onClick={click ? handleClick : null}
              >
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                exact
                to="/#projects"
                activeClassName="active"
                scroll={(el) => scrollWithOffset(el, 90)}
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                exact
                to="/#contact"
                activeClassName="active"
                scroll={(el) => scrollWithOffset(el, 90)}
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Me
              </HashLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <i className="fa fa-times">
                <AiOutlineClose />
              </i>
            ) : (
              <i className="fa fa-bars">
                {" "}
                <RiMenu3Fill />
              </i>
            )}
          </div>
        </div>
      </Nav>
    </div>
  );
};
export { NavBar };

const Nav = styled.nav`
  position: ${(scrolled) => (scrolled ? "fixed" : "sticky")};
  background-color: #2b222a;
  box-shadow: ${(scrolled) =>
    scrolled ? "rgba(2, 12, 27, 0.7) 0px 10px 30px -10px" : "unset"};
`;
