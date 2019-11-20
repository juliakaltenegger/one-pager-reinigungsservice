import React from "react";
import styled from "styled-components";

// importing different sections
import Services from "./Services.js";
import Team from "./Team.js";
import Clients from "./Clients.js";
import StyledBanner from "./StyledBanner.js";

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

const StyledCallCenterIcon = styled(CallCenterIcon)`
  fill: purple;
  width: 200px;
  height: auto;

  display: block;
`;

const NavBar = styled.div`
  background-color: #fff;
  position: fixed;
  overflow: hidden;
  width: 47%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0px;
`;

const LogoNav = styled.img`
  width: 100px;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px blue;
  /* width: 30%; */
  flex-grow: 2;

  & img {
  }

  & ul {
    /* remove bullet points */
    list-style: none;
    float: right;
    right: 0;
    margin: 0;
    padding: 0;
  }

  & li {
    /* from vertical to horizontal */
    display: block;
    float: right;
    /* space between list elements */
    padding: 5px;

    & a {
      /* remove underlining of routing links # */
      font-family: sans-serif;
      font-size: 12px;
      text-decoration: none;
      text-transform: uppercase;
    }

    & h1 {
      margin: 0;
      padding: 0;
    }

    & h2 {
      margin: 0;
      padding: 0;
    }
  }
`;

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="header">
        <NavBar id="navBar">
          <NavBarContainer className="nav-contain-logo">
            <a href="#navBar">
              <LogoNav
                className="nav-logo"
                src={logo}
                alt="Logo Adriana macht sauber"
              />
            </a>
          </NavBarContainer>
          <NavBarContainer className="nav-contain-h1-h2">
            <h1 className="headline">Adriana</h1>
            <h2 className="description">
              Reinigungsservice / Wäscherei / Airbnb Service
            </h2>
          </NavBarContainer>

          <NavBarContainer className="nav-contain-callcenter-ul">
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
          </NavBarContainer>
        </NavBar>
        <div classname="banner-header">
          <StyledBanner
            src={banner}
            className="banner-image"
            alt="Oranger Schwamm auf blauer Oberfläche"
          />
          <img src={meisterbetriebWhite} alt="Meisterbetrieb" />
          <h3>
            Meisterbetrieb Adriana macht sauber! Gründlich, schnell und
            professionell. In Büros, Wohnungen, Ordinationen... überall wo es
            Bedarf für eine gründliche Reinigung gibt. Wir freuen uns auf Ihre
            Anfrage.
          </h3>
        </div>
        <Services />
        <Team />

        <div classname="airbnb-section">
          <StyledBanner src={airbnbBanner} alt="Handy mit Airbnb App" />
          <img src={airbnbLogo} alt="Airbnb Logo" />
          <p>
            Wir haben jahrelange Erfahrung im airbnb-Service Bereich. Wir bieten
            ein Rundumservice an, welches beinhaltet
          </p>
          <h3>
            Schlüsselübergabe - Reinigung - Kontrolle - Übergabe der Locations -
            Begrüssung - Informations...
          </h3>
          <a href="mailto:sauber@adriana-reinigungsservice.at">
            E-Mail Anfrage
          </a>
        </div>
        <div classname="jobs" id="jobs">
          <WeWantYouIcon type="img" alt="Zeigefinger zeigt auf dich" />
          <h2>Interessiert an einem Job oder einer Lehre?</h2>
          <h3>Unter Reinigungs-Team braucht Verstärkung!</h3>
          <p>
            Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
            Bausteine Ihrer Karriere legen wollen? In welchem Arbeitsumfeld Sie
            wachsen wollen und wo Ihre Fähigkeiten am besten gefördert werden?
            Wir freuen uns auf Ihre Bewerbung...
          </p>
          <h3>Bewirb dich für eine Lehre bei uns!</h3>
          <p>
            Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
            Bausteine Ihrer Karriere legen wollen? In welchem Arbeitsumfeld Sie
            wachsen wollen und wo Ihre Fähigkeiten am besten gefördert werden?
          </p>
          <h3>Wir brauchen Hilfe in der Wäscherei!</h3>
          <p>
            In welchem Arbeitsumfeld Sie wachsen wollen und wo Ihre Fähigkeiten
            am besten gefördert werden? Unsere Mission Statements stellen
            Bausteine unseres Erfolgs dar. Seien Sie ein weiterer Baustein. Wir
            freuen uns auf Ihre Bewerbung als PERFECT FIT.
          </p>
        </div>
        <div classname="adrianas-wäscherei">
          <StyledBanner src={laundryBanner} alt="Saubere Wäsche" />
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
        </div>
        <Clients />
      </header>
    </div>
  );
}
