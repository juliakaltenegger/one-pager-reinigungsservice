import React from "react";
import styled from "styled-components";

import MaxWidth from "./MaxWidth.js";

// assets footer
import logoFooter from "./assets/logo-footer.png";
import meisterbetrieb from "./assets/meisterbetrieb.png";

export default Footer;

const StyledLogoFooter = styled.img`
  width: 300px;
  position: absolute;
  top: 40px;
`;

const FooterSectionPurple = styled.div`
  background: purple;
  position: relative;
  padding-top: 170px;
  padding-bottom: 60px;

  & h2 {
    padding-top: 20px;
    color: #fff;
    font-size: 14px;
    text-align: left;
  }

  & p {
    color: #fff;
  }

  & a {
    color: #fff;
    text-decoration: none;
    text-decoration: underline;
  }
`;

const FooterSectionWhite = styled.div`
  position: relative;

  & p {
    color: purple;
    margin-top: 30px;

    line-height: 20px;
  }

  & a {
    color: purple;
    text-decoration: none;
    text-decoration: underline;
  }

  & img {
    opacity: 0.3;
    width: 400px;
    position: absolute;
    right: 200px;
    top: 0;
  }
`;

function Footer() {
  return (
    <footer id="contact">
      <FooterSectionPurple>
        <MaxWidth>
          <div className="footer-purple">
            <StyledLogoFooter
              src={logoFooter}
              alt="Logo Adriana macht sauber"
            />
            <h2>Adriana Reinigungsservice E.U.</h2>
            <p>
              Karl Löwe Gasse 23/14, 1120 Wien <br></br> Tel.: +43 699 108 43
              780
              <br></br>
              <a href="mailto:sauber@adriana-reinigungsservice.at">
                sauber@adriana-reinigungsservice.at
              </a>
            </p>
            <h2>Adriana Wäscherei</h2>
            <p>
              Fockygasse 2/1, 1120 Wien <br></br>Tel.: +43 699 123 45 89
              <br></br>Öffnungszeiten: Mo-Fr 08:00-17:00<br></br>
              <a href="mailto:waescherei@adriana-reinigungsservice.at">
                waescherei@adriana-reinigungsservice.at
              </a>
            </p>
          </div>
        </MaxWidth>
      </FooterSectionPurple>
      <FooterSectionWhite>
        <MaxWidth>
          <div className="footer-white">
            <p>
              © Adriana-Reinigungsservice e.U., 2019 <br></br>
              Reinigungsservice/Wäscherei/airbnb Service <br></br> 0699 108 43
              780 {""}
              <a href="mailto:sauber@adriana-reinigungsservice.at">
                sauber@adriana-reinigungsservice.at
              </a>
              {""} Datenschutzerklärung
            </p>
            <img src={meisterbetrieb} alt="Meisterbetrieb" />
          </div>
        </MaxWidth>
      </FooterSectionWhite>{" "}
    </footer>
  );
}
