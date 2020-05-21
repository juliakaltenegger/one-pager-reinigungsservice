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
import airbnbBanner from "./assets/airbnb-banner.jpeg";
// airbnbBanner = placeholder stockphoto istockphoto-517702502-2048x2048.jpg

//assets laundry
import laundryBanner from "./assets/laundry-banner.jpg";
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

  & a {
    text-decoration: none;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

//__________SPONGE BANNER__________

const BannerHeader = styled.section`
  position: relative;
  background: url(${banner});
  background-size: cover;
  width: 100%;
  min-height: 620px;

  @media (max-width: 600px) {
    background-position-x: -50vw;
  }

  /* & img {
    width: 100%;
    min-height: 620px;
    z-index: -1;
    display: none;
  } */
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
const AirbnbContainer = styled.section`
  position: relative;
  background: url(${airbnbBanner});
  background-size: cover;
  width: 100%;
  min-height: 620px;
`;

const AirbnbPurpleTextBox = styled.div`
  width: 100%;
  height: 99%;

  background-image: linear-gradient(
    to right,
    rgba(155, 0, 174, 0),
    rgba(155, 0, 174, 0.8),
    rgba(155, 0, 174, 1)
  );

  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  padding: 40px;

  z-index: 100;
  position: absolute;
  top: 0px;

  & img {
    margin-left: 50%;
    width: 200px;
    padding-top: 20px;
  }

  & p {
    color: #ddd2df;
    font-family: "Raleway", sans-serif;

    font-size: 18px;
    margin-left: 50%;
    margin-right: 150px;
    padding-top: 20px;
  }

  & h3 {
    color: #ddd2df;
    font-size: 24px;
    margin-left: 50%;
    margin-bottom: 50px;
    margin-right: 150px;
    padding-top: 20px;
  }

  & a,
  a:link,
  a:visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    align-items: right;
    margin-left: 50%;
    padding-top: 20px;

    /* - to make it look like a button */
    background-color: #cc52d4;
    padding: 20px 46px 20px 46px;
  }
`;

//__________JOB SECTION__________
const JobSection = styled.div`
  padding-top: 60px;
`;

const StyledWeWantYouIcon = styled(WeWantYouIcon)`
  padding-top: 60px;
  fill: purple;
  width: 60px;
  height: auto;
  text-align: center;
`;

const JobSectionGridContainer = styled.section`
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 40px 50px 0px 50px;

  & h2 {
    margin-bottom: 30px;
  }
`;

const JobSectionGridItem = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 0px 20px 0px 20px;
  line-height: 20px;
`;

//__________LAUNDRY SECTION__________
const LaundryContainer = styled.section`
  position: relative;
  margin-bottom: 60px;
  background: url(${laundryBanner});
  background-size: cover;
  width: 100%;
  min-height: 620px;
  margin-bottom: 60px;
`;

const LaundryBlueTextBox = styled.div`
  width: 100%;
  height: 99.5%;
  background-image: linear-gradient(
    to right,
    rgba(109, 198, 210, 0),
    rgba(109, 198, 210, 0.96),
    rgba(109, 198, 210, 1),
    rgba(109, 198, 210, 1)
  );
  position: absolute;
  top: 0;

  & h2 {
    color: #fff;
    font-size: 18px;
    margin-left: 50%;
    padding-top: 110px;
    margin-bottom: 0px;
    text-align: left;
  }

  & p {
    color: #000;
    font-family: "Raleway", sans-serif;
    line-height: 30px;
    margin-left: 50%;
    margin-right: 40px;
    padding-top: 10px;
  }

  & h3 {
    color: #fff;
    font-size: 18px;
    margin-left: 50%;
    padding-bottom: 70px;
    margin-right: 40px;
    padding-top: 20px;
  }

  & a,
  a:link,
  a:visited {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    align-items: right;
    margin-left: 50%;
    padding-top: 20px;

    /* - to make it look like a button */
    background-color: #5aa6b0;
    padding: 20px 46px 20px 46px;
  }
`;

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="header">
        <NavBar>
          <MaxWidthNav>
            <NavBarFlexbox>
              <div className="nav-contain-logo">
                <a href="#start">
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
                  <a href="#service">Reinigungsservice</a> /{" "}
                  <a href="#laundry">Wäscherei</a> /{" "}
                  <a href="#airbnb">Airbnb Service</a>
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
                    <a href="#contact">Kontakt</a>
                  </li>
                </ul>
              </NavContainerLinks>
            </NavBarFlexbox>
          </MaxWidthNav>
        </NavBar>
        <BannerHeader
          imgUrl={process.env.PUBLIC_URL + "/banner.jpg"}
          id="start"
          className="banner-header"
        >
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
          <AirbnbContainer
            imgUrl={process.env.PUBLIC_URL + "/airbnb-banner.jpeg"}
            id="airbnb"
            className="airbnb-banner"
          >
            <StyledBanner />
            <AirbnbPurpleTextBox>
              <img src={airbnbLogo} alt="Airbnb Logo" />
              <p>
                Wir haben jahrelange Erfahrung im airbnb-Service Bereich. Wir
                bieten ein Rundumservice an, welches beinhaltet
              </p>
              <h3>
                Schlüsselübergabe - Reinigung - Kontrolle - Übergabe der
                Locations - Begrüssung - Informations...
              </h3>
              <a href="mailto:sauber@adriana-reinigungsservice.at">
                E-Mail Anfrage
              </a>
            </AirbnbPurpleTextBox>
          </AirbnbContainer>
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
              <JobSectionGridContainer>
                <JobSectionGridItem>
                  <h3>Unter Reinigungs-Team braucht Verstärkung!</h3>
                  <p>
                    Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
                    Bausteine Ihrer Karriere legen wollen? In welchem
                    Arbeitsumfeld Sie wachsen wollen und wo Ihre Fähigkeiten am
                    besten gefördert werden? Wir freuen uns auf Ihre
                    Bewerbung...
                  </p>
                </JobSectionGridItem>
                <JobSectionGridItem>
                  <h3>Bewirb dich für eine Lehre bei uns!</h3>
                  <p>
                    Haben Sie sich schon Gedanken gemacht, wie Sie die nächsten
                    Bausteine Ihrer Karriere legen wollen? In welchem
                    Arbeitsumfeld Sie wachsen wollen und wo Ihre Fähigkeiten am
                    besten gefördert werden?
                  </p>
                </JobSectionGridItem>
                <JobSectionGridItem>
                  <h3>Wir brauchen Hilfe in der Wäscherei!</h3>
                  <p>
                    In welchem Arbeitsumfeld Sie wachsen wollen und wo Ihre
                    Fähigkeiten am besten gefördert werden? Unsere Mission
                    Statements stellen Bausteine unseres Erfolgs dar. Seien Sie
                    ein weiterer Baustein. Wir freuen uns auf Ihre Bewerbung als
                    PERFECT FIT.
                  </p>
                </JobSectionGridItem>
              </JobSectionGridContainer>
            </JobSection>
          </MaxWidth>
        </BackgroundLightPurple>

        <div className="adrianas-wäscherei">
          <LaundryContainer
            imgUrl={process.env.PUBLIC_URL + "/laundry-banner.jpg"}
            id="laundry"
            className="laundry-banner"
          >
            <StyledBanner />
            <LaundryBlueTextBox>
              <MaxWidth>
                <h2>Adrianas Wäscherei</h2>
                <p>
                  Ihre Textilien werden bei uns mit modernster Technik und
                  höchster Sorgfalt gereinigt. Durch unsere umfassenden
                  Qualitätssicherung gewährleisten wir einen raschen Service mit
                  höchster Kundenzufriedenheit. Überzeugen Sie sich noch heute
                  davon, wie sauber Ihre Wäsche wird!
                </p>
                <h3>Abholen - Reinigen - Trocknen - Bügeln - Liefern</h3>
                <a href="mailto:waescherei@adriana-reinigungsservice.at">
                  E-Mail Anfrage
                </a>
              </MaxWidth>
            </LaundryBlueTextBox>
          </LaundryContainer>
        </div>
        <Clients />
      </header>
    </div>
  );
}
