import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
// import logo from "../assets/logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

// const Logo = styled.img`
//   width: 150px;
//   border: 2px white;
//   /* - top / right / bottom / left */
//   margin: 10px 0px 0px 0px;
//   position: fixed;
// `;

const Navbar = () => {
  return /*#__PURE__*/ React.createElement(
    Nav,
    null,
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "nav-contain-logo",
      },
      // /*#__PURE__*/ React.createElement(
      //   "a",
      //   {
      //     href: "#start",
      //   },
      //   /*#__PURE__*/ React.createElement(Logo, {
      //     className: "nav-logo",
      //     src: logo,
      //     alt: "Logo Adriana macht sauber",
      //   }),
      // ),
    ),
    /*#__PURE__*/ React.createElement(Burger, null),
  );
};

export default Navbar;
