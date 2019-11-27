import React from "react";
import styled from "styled-components";

// importing different sections
import Services from "./Services.js";
import Team from "./Team.js";
import Clients from "./Clients.js";
import StyledBanner from "./StyledBanner.js";
import MaxWidth from "./MaxWidth.js";
import BackgroundLightPurple from "./BackgroundLightPurple.js";

//importing assets for nav bar
import { ReactComponent as CallCenterIcon } from "./assets/call-center.svg";
import logo from "./assets/logo.png";
import banner from "./assets/banner.jpg";
import meisterbetriebWhite from "./assets/meisterbetrieb_white.png";
// banner = placeholder stockphoto istockphoto-939057498-2048x2048.jpg

//assets airbnb section
import airbnbLogo from "./assets/airbnb-logo.png";
import airbnbBanner from "./assets/airbnb-banner.png";
// airbnbBanner = placeholder stockphoto istockphoto-517702502-2048x2048.jpg

//assets laundry
import laundryBanner from "./assets/laundry-banner.png";
// laundryBanner = placeholder stockphoto istockphoto-665819900-2048x2048 Kopie.jpg

//icon jobs
import { ReactComponent as WeWantYouIcon } from "./assets/filter-07.svg";

// css in js: styled components

//__________NAVBAR__________

const MaxWidthNav = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
`;
const NavBar = styled.div`
  background-color: #fff;
  height: 130px;
  width: 100%;
  /* - so that navbar always stays on top as you scroll down */
  position: fixed;
  z-index: 400;

  /* overflow: hidden; */
`;

const NavBarFlexbox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* - distributes content evenly while pushing the right and left one to the very right and very left */
  justify-content: space-between;
  /* - aligns items vertically on top  */
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 150px;
  border: 2px white;
  /* - top / right / bottom / left */
  margin: 10px 0px 0px 0px;
  position: fixed;
`;

const NavContainerCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 360px;
  padding: 0px;
  margin-top: 45px;
  margin-right: auto;
  margin-left: 170px;

  & h2 {
    font-size: 13px;
    font-weight: 400;
    text-align: left;
  }
`;

const NavContainerLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 350px;
  /* - items are packed toward to end line (to the very right) */
  justify-content: flex-end;

  & ul {
    /* - remove bullet points */
    list-style: none;
    margin: -10px;
    padding: 0;
  }

  & li {
    /* - from vertical to horizontal */
    display: inline;
    /* - space between list elements */
    padding: 5px;
  }

  /* links in nav bar (service team jobs/karriere kunden kontakt) */
  & a {
    font-family: sans-serif;
    font-size: 12px;
    font-weight: lighter;
    color: #000;

    /* - remove underlining of routing links # */
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const StyledCallCenterIcon = styled(CallCenterIcon)`
  /* NEEDS TO BE UPDATED (HEX!!!) */
  fill: lightblue;
  /* resizing */
  width: 200px;
  height: auto;
  display: block;
  margin-bottom: 20px;
`;

//__________SPONGE BANNER__________

const BannerHeader = styled.section`
  position: relative;
`;

const MeisterWhite = styled.img`
  z-index: 100;
  position: absolute;
  top: 200px;
  left: 130px;
  width: 380px;
  opacity: 0.3;
`;

const PurpleTextBox = styled.div`
  background-color: purple;
  opacity: 0.7;
  width: 490px;

  font-family: sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  padding: 40px;

  z-index: 100;
  position: absolute;
  top: 420px;
  left: 210px;

  & a {
    color: #fff;
  }
`;

//__________AIRBNB BANNER__________
const AirbnbPurpleTextBox = styled.div`
  width: 100%;
  height: 530px;
  background-image: linear-gradient(
    to right,
    rgba(155, 0, 174, 0),
    rgba(155, 0, 174, 0.8),
    rgba(155, 0, 174, 1)
  );

  font-family: sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  padding: 40px;

  z-index: 100;
  position: absolute;
  top: 2805px;

  & img {
    margin-left: 50%;
    width: 200px;
  }

  & p {
    color: #fff;
    font-size: 18px;
    margin-left: 50%;
    margin-right: 200px;
  }

  & h3 {
    color: #fff;
    font-size: 24px;
    margin-left: 50%;
    margin-bottom: 50px;
    margin-right: 200px;
  }

  & a,
  a:link,
  a:visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    align-items: right;
    margin-left: 50%;

    /* - to make it look like a button */
    background-color: #cc52d4;
    padding: 20px 46px 20px 46px;
  }
`;

//__________JOB SECTION__________

const JobSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  & h2 {
    margin-bottom: 30px;
  }
`;

const StyledWeWantYouIcon = styled(WeWantYouIcon)`
  fill: purple;
  width: 60px;
  height: auto;
  text-align: center;
`;

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="header">
        <NavBar id="navBar">
          <MaxWidthNav>
            <NavBarFlexbox>
              <div className="nav-contain-logo">
                <a href="#navBar">
                  <Logo
                    className="nav-logo"
                    src={logo}
                    alt="Logo Adriana macht sauber"
                  />
                </a>
              </div>
              <NavContainerCenter className="nav-contain-h1-h2">
                <h1 className="headline">Adriana</h1>
                <h2 className="description">
                  Reinigungsservice / Wäscherei / Airbnb Service
                </h2>
              </NavContainerCenter>

              <NavContainerLinks className="nav-contain-callcenter-ul">
                <StyledCallCenterIcon type="img" alt="Call Center Agent" />

                <ul className="nav-bar-links">
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
                    {" "}
                    <a href="#contact">Kontakt</a>
                  </li>
                </ul>
              </NavContainerLinks>
            </NavBarFlexbox>
          </MaxWidthNav>
        </NavBar>
        <BannerHeader className="banner-header">
          <StyledBanner
            src={banner}
            className="banner-image"
            alt="Oranger Schwamm auf blauer Oberfläche"
          />
          <MeisterWhite src={meisterbetriebWhite} alt="Meisterbetrieb" />
          <MaxWidth className="banner-max-width">
            <PurpleTextBox>
              Meisterbetrieb Adriana macht sauber! <br />{" "}
              <strong>Gründlich, schnell und professionell.</strong> <br /> In
              Büros, Wohnungen, Ordinationen... überall wo es Bedarf für eine
              gründliche Reinigung gibt. Wir freuen uns auf Ihre{" "}
              <a href="mailto:sauber@adriana-reinigungsservice.at">Anfrage</a>.
            </PurpleTextBox>
          </MaxWidth>
        </BannerHeader>
        <Services />
        <Team />

        <section className="airbnb-section">
          <StyledBanner src={airbnbBanner} alt="Handy mit Airbnb App" />
          <AirbnbPurpleTextBox>
            <img src={airbnbLogo} alt="Airbnb Logo" />
            <p>
              Wir haben jahrelange Erfahrung im airbnb-Service Bereich. Wir
              bieten ein Rundumservice an, welches beinhaltet
            </p>
            <h3>
              Schlüsselübergabe - Reinigung - Kontrolle - Übergabe der Locations
              - Begrüssung - Informations...
            </h3>
            <a href="mailto:sauber@adriana-reinigungsservice.at">
              E-Mail Anfrage
            </a>
          </AirbnbPurpleTextBox>
        </section>

        <BackgroundLightPurple>
          <MaxWidth>
            <JobSection className="jobs" id="jobs">
              <h2>Interessiert an einem Job oder einer Lehre?</h2>
              <div style={{ textAlign: "center" }}>
                <StyledWeWantYouIcon
                  type="img"
                  alt="Zeigefinger zeigt auf dich"
                />
              </div>

              <h3>Unter Reinigungs-Team braucht Verstärkung!</h3>
              <p>
                Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
                Bausteine Ihrer Karriere legen wollen? In welchem Arbeitsumfeld
                Sie wachsen wollen und wo Ihre Fähigkeiten am besten gefördert
                werden? Wir freuen uns auf Ihre Bewerbung...
              </p>
              <h3>Bewirb dich für eine Lehre bei uns!</h3>
              <p>
                Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
                Bausteine Ihrer Karriere legen wollen? In welchem Arbeitsumfeld
                Sie wachsen wollen und wo Ihre Fähigkeiten am besten gefördert
                werden?
              </p>
              <h3>Wir brauchen Hilfe in der Wäscherei!</h3>
              <p>
                In welchem Arbeitsumfeld Sie wachsen wollen und wo Ihre
                Fähigkeiten am besten gefördert werden? Unsere Mission
                Statements stellen Bausteine unseres Erfolgs dar. Seien Sie ein
                weiterer Baustein. Wir freuen uns auf Ihre Bewerbung als PERFECT
                FIT.
              </p>
            </JobSection>
          </MaxWidth>
        </BackgroundLightPurple>

        <div className="adrianas-wäscherei">
          <StyledBanner src={laundryBanner} alt="Saubere Wäsche" />
          <MaxWidth>
            <h2>Adrianas Wäscherei</h2>
            <p>
              Ihre Textilien werden bei uns mit modernster Technik und höchster
              Sorgfalt gereinigt. Durch unsere umfassenden Qualitätssicherung
              gewährleisten wir einen raschen Service mit höchster
              Kundenzufriedenheit. Überzeugen Sie sich noch heute davon, wie
              sauber Ihre Wäsche wird!
            </p>
            <h3>Abholen - Reinigen - Trocknen - Bügeln - Liefern</h3>
            <a href="mailto:waescherei@adriana-reinigungsservice.at">
              E-Mail Anfrage
            </a>
          </MaxWidth>
        </div>
        <Clients />
      </header>
    </div>
  );
}
