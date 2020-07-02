import React from "react";
// import { ReactComponent as CallCenterIcon } from "../assets/call-center.svg";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 5px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: lighter;
    color: #000;

    /* - remove underlining of routing links # */
    text-decoration: none !important;
    text-decoration-color: #000;
    text-transform: uppercase;
  }

  a {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: lighter;
    color: #000;

    /* - remove underlining of routing links # */
    text-decoration: none !important;
    text-decoration-color: #000;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #800080;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff !important;
    }
  }
`;

const RightNav = ({ open }) => {
  return /*#__PURE__*/ React.createElement(
    Ul,
    {
      open: open,
    },
    /*#__PURE__*/ React.createElement(
      "li",
      null,
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "#service",
        },
        "Service",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      null,
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "#team",
        },
        "Team",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      null,
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "#jobs",
        },
        "Jobs/Karriere",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      null,
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "#clients",
        },
        "Kunden",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "li",
      null,
      /*#__PURE__*/ React.createElement(
        "a",
        {
          href: "#contact",
        },
        "Kontakt",
      ),
    ),
  );
};

export default RightNav;
