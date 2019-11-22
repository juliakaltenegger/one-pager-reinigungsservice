import React from "react";
// import styled from "styled-components";

import MaxWidth from "./MaxWidth.js";

// assets footer
import logoFooter from "./assets/logo-footer.png";
import meisterbetrieb from "./assets/meisterbetrieb.png";

export default Footer;

function Footer() {
  return (
    <MaxWidth>
      <footer id="contact">
        <div className="footer-purple">
          <img src={logoFooter} alt="Logo Adriana macht sauber" />
          <h2>Adriana Reinigungsservice E.U.</h2>
          <p>
            Karl Löwe Gasse 23/14, 1120 Wien Tel.: +43 699 108 43 780
            <a href="mailto:sauber@adriana-reinigungsservice.at">
              sauber@adriana-reinigungsservice.at
            </a>
          </p>
          <h2>Adriana Wäscherei</h2>
          <p>
            Fockygasse 2/1, 1120 Wien Tel.: +43 699 123 45 89 Öffnungszeiten:
            Mo-Fr 08:00-17:00
            <a href="mailto:waescherei@adriana-reinigungsservice.at">
              waescherei@adriana-reinigungsservice.at
            </a>
          </p>
        </div>
        <div className="footer-white">
          <p>
            © Adriana-Reinigungsservice e.U., 2019
            Reinigungsservice/Wäscherei/airbnb Service 0699 108 43 780
            <a href="mailto:sauber@adriana-reinigungsservice.at">
              sauber@adriana-reinigungsservice.at
            </a>
            Datenschutzerklärung
          </p>
          <img src={meisterbetrieb} alt="Meisterbetrieb" />
        </div>
      </footer>
    </MaxWidth>
  );
}
