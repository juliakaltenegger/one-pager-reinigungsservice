import React from "react";
import styled from "styled-components";

import MaxWidth from "./MaxWidth.js";

//logos clients
import logoCorporateMatters from "./assets/cm-logo.png";
import logoHektar from "./assets/hektar.png";
import logoAneli from "./assets/aneli.png";
import logoIam from "./assets/iam.png";
import logoKununu from "./assets/kununu.png";
import logoPlaybrush from "./assets/playbrush.png";
import logoPrimed from "./assets/primed.png";
import logoStockert from "./assets/stockert.png";

export default Clients;

function Clients() {
  return (
    <MaxWidth>
      <div className="clients" id="clients">
        <h2>Unsere lieben Kunden</h2>

        <div className="client-corporate">
          <img src={logoCorporateMatters} alt="Logo Corporate Matters" />
          <p>
            „Adriana Reinigungsservice begleitet uns seit 2013. Ihr Team ist
            super organisiert und sehr freundlich. Auf Adriana ist immer
            Verlass. Danke dafür!“ CORPORATE MATTERS GMBH
          </p>
        </div>

        <div className="client-hektar">
          {" "}
          <img src={logoHektar} alt="Logo Hektar und Nektar" />
          <p>
            „Adriana begleitet uns jetzt schon seit vielen Jahren bei unseren
            beruflichen und privaten Abenteuern, dank Ihr herrscht immer Ordnung
            in unseren Räumlichkeiten.“ hektar & nektar, Bienenschutz-Community
          </p>
        </div>

        <div className="client-stockert">
          {" "}
          <img src={logoStockert} alt="Logo Stockert Lieber Immobilien" />
          <p>
            „Es macht uns große Freude mit Adriana und Ihrem sympathischen Team
            zusammen zu arbeiten. All unsere Bedürfnisse und Wünsche werden in
            unser größten Zufriedenheit und sehr gewissenhaft erfüllt.“ STOCKERT
            LEBER IMMOBILIEN GMBH
          </p>
        </div>

        <div className="client-playbrush">
          {" "}
          <img src={logoPlaybrush} alt="Logo Playbrush" />
          <p>
            „Playbrush ist sehr zufrieden mit dem Service von Adriana & Ihrem
            Team. Sehr verlässlich, schnell und sauber!“ Playbrush GmbH
          </p>
        </div>

        <div className="client-primed">
          {" "}
          <img src={logoPrimed} alt="Logo Primed Group" />
          <p>
            „Adrina Reinigungsservice reinigt unsere Büroräumlichkeiten. Sie und
            ihr Team sind flexibel, gründlich und zuverlässig. Auf jeden Fall
            empfehlenswert!“ primed Group
          </p>
        </div>

        <div className="client-iam">
          {" "}
          <img src={logoIam} alt="Logo I am smart ad" />
          <p>
            „Super zuverlässig, genau und sehr flexibel. Wir sind sehr zufrieden
            und können Adriana jedem weiterempfehlen :-)“ High Five GmbH
          </p>
        </div>

        <div className="client-kununu">
          {" "}
          <img src={logoKununu} alt="Logo Kununu" />
          <p>
            „Adrianas Reinigungsservice reinigt seit 2011 unsere Räumlichkeiten.
            Wir sind die größte Arbeitgeber- Bewertungsplattform in Europa.
            Aktuell haben wir rund 1,3 Millionen Bewertungen zu mehr als 270.000
            Unternehmen.“ kununu GmbH
          </p>
        </div>

        <div className="client-aneli">
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
        <div className="ordination-beckmann">
          <img src="" alt="" />
          <p>
            „Adrianas Reinigungsservice reinigt seit 2012 unsere
            Räumlichkeiten.“ Ordination Dr. Elmar Beckmann, Psychiatrie
          </p>
        </div>
      </div>
    </MaxWidth>
  );
}
