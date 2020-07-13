import React from "react";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto !important;
  margin-block-start: 0;
  margin-right: 100px;

  li {
    padding: 0px 5px 5px 5px;
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
    margin-block-start: initial !important;
    margin-right: 0px;

    a {
      color: #fff !important;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#service">Service</a>
      </li>
      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#jobs">Jobs/Karriere</a>
      </li>
      <li>
        <a href="#clients">Kunden</a>
      </li>
      <li>
        <a href="#contact">Kontakt</a>
      </li>
    </Ul>
  );
};

export default RightNav;
