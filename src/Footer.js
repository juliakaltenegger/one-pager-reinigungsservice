import React from "react";
import styled from "styled-components";

import MaxWidth from "./MaxWidth.js";

// assets footer
import logoFooter from "./assets/logo-footer.png";
import meisterbetrieb from "./assets/meisterbetrieb.png";

export default Footer;

const StyledLogoFooter = styled.img`
  width: 300px;
  /* position: absolute;
  top: 40px; */
  padding-bottom: 20px;
`;

const FooterSectionPurple = styled.div`
  background: purple;
  position: relative;
  padding-top: 60px;
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

const FooterGridPurple = styled.div`
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

const FooterGridItem = styled.div`
  padding-right: 125px;
`;

const FooterForm = styled.form`
  display: grid;
  grid-template-rows: auto auto auto;

  & label {
    color: #fff;
    font-family: "Roboto", sans-serif;
    line-height: 20px;
    padding-top: 20px;
    padding-bottom: 2px;
  }

  & input {
    font-family: "Roboto", sans-serif;
    padding-right: 10px;
    height: 25px;
    width: 200px;
    min-width: 30em;
  }
`;

const FormInput = styled.input`
  display: block;
  width: 100%;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    margin-right: 2em;
`;

const FooterButton = styled.button`
  text-transform: uppercase;
  background-color: #cc52d4;
  padding: 20px 46px 20px 46px;
  color: #fff;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  border: none;
  margin-top: 20px;
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

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-left: 2em;
    margin-right: 2em;

    & img {
      display: none;
    }
  }
`;

// const InputMessage = styled.label`
//   min-height: 20em;
//   min-width: 60em !important;
//   padding-left: 0px;
// `;

function Footer() {
  return (
    <footer id="contact">
      <FooterSectionPurple>
        <MaxWidth>
          <FooterGridPurple>
            <FooterGridItem>
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
            </FooterGridItem>
            <FooterGridItem>
              <FooterForm
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <FormInput type="hidden" name="form-name" value="contact" />
                <p>
                  <label>
                    Name
                    <FormInput type="text" name="name" />
                  </label>
                </p>
                <p>
                  <label>
                    E-Mailadresse
                    <FormInput type="email" name="email" />
                  </label>
                </p>
                <p>
                  <label>
                    Betreff
                    <FormInput type="text" name="subject" />
                  </label>
                </p>
                <p>
                  <label>
                    Message
                    <TextArea
                      name="message"
                      placeholder="Ihre Nachricht"
                      rows="10"
                      wrap="hard"
                    ></TextArea>
                  </label>
                </p>
                <p>
                  <FooterButton type="submit">Nachricht senden</FooterButton>
                </p>
              </FooterForm>
            </FooterGridItem>
          </FooterGridPurple>
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
                {""} sauber@adriana-reinigungsservice.at {""}
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
