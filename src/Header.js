import React from "react";
import Services from "./Services.js";
import Team from "./Team.js";

import logo from "./logo.png";
import banner from "./banner.jpg";
import airbnbLogo from "./airbnb-logo.png";
//logos clients
import logoCorporateMatters from "./cm-logo.png";
import logoHektar from "./hektar.png";
import logoAneli from "./aneli.png";
import logoIam from "./iam.png";
import logoKununu from "./kununu.png";
import logoPlaybrush from "./playbrush.png";
import logoPrimed from "./primed.png";
import logoStockert from "./stockert.png";

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="nav-bar" id="navBar">
          <a href="#navBar">
            <img
              className="nav-logo"
              src={logo}
              alt="Logo Adriana macht sauber"
            />
          </a>
          <h1 className="headline">Adriana</h1>
          <h2 className="description">
            Reinigungsservice / Wäscherei / Airbnb Service
          </h2>
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
        </div>
        <div className="banner">
          <img
            src={banner}
            className="banner-image"
            alt="Oranger Schwamm auf blauer Oberfläche"
          />
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
        <div classname="clients" id="clients">
          <h2>Unsere lieben Kunden</h2>

          <div classname="client-corporate">
            <img src={logoCorporateMatters} alt="Logo Corporate Matters" />
            <p>
              „Adriana Reinigungsservice begleitet uns seit 2013. Ihr Team ist
              super organisiert und sehr freundlich. Auf Adriana ist immer
              Verlass. Danke dafür!“ CORPORATE MATTERS GMBH
            </p>
          </div>

          <div classname="client-hektar">
            {" "}
            <img src={logoHektar} alt="Logo Hektar und Nektar" />
            <p>
              „Adriana begleitet uns jetzt schon seit vielen Jahren bei unseren
              beruflichen und privaten Abenteuern, dank Ihr herrscht immer
              Ordnung in unseren Räumlichkeiten.“ hektar & nektar,
              Bienenschutz-Community
            </p>
          </div>

          <div classname="client-stockert">
            {" "}
            <img src={logoStockert} alt="Logo Stockert Lieber Immobilien" />
            <p>
              „Es macht uns große Freude mit Adriana und Ihrem sympathischen
              Team zusammen zu arbeiten. All unsere Bedürfnisse und Wünsche
              werden in unser größten Zufriedenheit und sehr gewissenhaft
              erfüllt.“ STOCKERT LEBER IMMOBILIEN GMBH
            </p>
          </div>

          <div classname="client-playbrush">
            {" "}
            <img src={logoPlaybrush} alt="Logo Playbrush" />
            <p>
              „Playbrush ist sehr zufrieden mit dem Service von Adriana & Ihrem
              Team. Sehr verlässlich, schnell und sauber!“ Playbrush GmbH
            </p>
          </div>

          <div classname="client-primed">
            {" "}
            <img src={logoPrimed} alt="Logo Primed Group" />
            <p>
              „Adrina Reinigungsservice reinigt unsere Büroräumlichkeiten. Sie
              und ihr Team sind flexibel, gründlich und zuverlässig. Auf jeden
              Fall empfehlenswert!“ primed Group
            </p>
          </div>

          <div classname="client-iam">
            {" "}
            <img src={logoIam} alt="Logo I am smart ad" />
            <p>
              „Super zuverlässig, genau und sehr flexibel. Wir sind sehr
              zufrieden und können Adriana jedem weiterempfehlen :-)“ High Five
              GmbH
            </p>
          </div>

          <div classname="client-kununu">
            {" "}
            <img src={logoKununu} alt="Logo Kununu" />
            <p>
              „Adrianas Reinigungsservice reinigt seit 2011 unsere
              Räumlichkeiten. Wir sind die größte Arbeitgeber-
              Bewertungsplattform in Europa. Aktuell haben wir rund 1,3
              Millionen Bewertungen zu mehr als 270.000 Unternehmen.“ kununu
              GmbH
            </p>
          </div>

          <div classname="client-aneli">
            <img src={logoAneli} alt="Logo Aneli" />
            <p>
              „Wir beauftragen Adriana seit 2011 mit der Reinigung unserer
              Seminarräume. Da es jeden Tag mindestens 3 Seminare mit 10
              Teilnehmern gibt und diese Stunden dauern können war es uns sehr
              wichtig, dass die Reinigungsfirma höchst zuverlässig und
              vertrauensvoll ist. Mit Adriana haben wir die perfekte
              Reinigungskraft gefunden. Wir sind höchst zufrieden. Das Team ist
              freundlich und sehr angenehm....“ aneli Ausbildungszentrum
            </p>
          </div>
          <div classname="ordination-beckmann">
            <img src="" alt="" />
            <p>
              „Adrianas Reinigungsservice reinigt seit 2012 unsere
              Räumlichkeiten.“ Ordination Dr. Elmar Beckmann, Psychiatrie
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
