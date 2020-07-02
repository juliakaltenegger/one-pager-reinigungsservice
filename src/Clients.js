import React from "react";
import styled, { css } from "styled-components";

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

const ClientsGridContainer = styled.section`
  padding-bottom: 60px;
  display: grid;
  grid-template-columns: auto;
  margin: 70px 50px 0px 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ClientsGridItem = styled.div`
  font-size: 30px;
  padding-right: 125px;
  padding-bottom: 40px;
  line-height: 20px;
  display: grid;
  grid-template-columns: auto auto;
  text-align: left;
  height: 170px;

  & img {
    width: 130px;
    height: auto;
    padding-right: 10px;
    padding-top: 20px;
  }

  & h3 {
    margin: 25px 0px 25px 0px;
    text-transform: none;
  }

  ${(props) =>
    props.clientAneli &&
    css`
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 1;
    `}
  ${(props) =>
    props.ordination &&
    css`
      grid-row-start: 5;
      grid-row-end: 5;
      grid-column-start: 2;
    `}

    @media (max-width: 768px) {
    display: block;
    height: auto;
    padding: 10px;
    text-align: center;
  }
`;

function Clients() {
  return (
    <MaxWidth>
      <div className="clients" id="clients">
        <h2>Unsere lieben Kunden</h2>
        <ClientsGridContainer>
          <ClientsGridItem corporate>
            <img src={logoCorporateMatters} alt="Logo Corporate Matters" />
            <p>
              „Adriana Reinigungsservice begleitet uns seit 2013. Ihr Team ist
              super organisiert und sehr freundlich. Auf Adriana ist immer
              Verlass. Danke dafür!“ CORPORATE MATTERS GMBH
            </p>
          </ClientsGridItem>

          <ClientsGridItem iam>
            <img src={logoIam} alt="Logo I am smart ad" />
            <p>
              „Super zuverlässig, genau und sehr flexibel. Wir sind sehr
              zufrieden und können Adriana jedem weiterempfehlen :-)“ High Five
              GmbH
            </p>
          </ClientsGridItem>

          <ClientsGridItem hektar>
            <img src={logoHektar} alt="Logo Hektar und Nektar" />
            <p>
              „Adriana begleitet uns jetzt schon seit vielen Jahren bei unseren
              beruflichen und privaten Abenteuern, dank Ihr herrscht immer
              Ordnung in unseren Räumlichkeiten.“ hektar & nektar,
              Bienenschutz-Community
            </p>
          </ClientsGridItem>

          <ClientsGridItem kununu>
            <img src={logoKununu} alt="Logo Kununu" />
            <p>
              „Adrianas Reinigungsservice reinigt seit 2011 unsere
              Räumlichkeiten. Wir sind die größte Arbeitgeber-
              Bewertungsplattform in Europa. Aktuell haben wir rund 1,3
              Millionen Bewertungen zu mehr als 270.000 Unternehmen.“ kununu
              GmbH
            </p>
          </ClientsGridItem>

          <ClientsGridItem stockert>
            {" "}
            <img src={logoStockert} alt="Logo Stockert Lieber Immobilien" />
            <p>
              „Es macht uns große Freude mit Adriana und Ihrem sympathischen
              Team zusammen zu arbeiten. All unsere Bedürfnisse und Wünsche
              werden in unser größten Zufriedenheit und sehr gewissenhaft
              erfüllt.“ STOCKERT LEBER IMMOBILIEN GMBH
            </p>
          </ClientsGridItem>
          <ClientsGridItem primed>
            <img src={logoPrimed} alt="Logo Primed Group" />
            <p>
              „Adrina Reinigungsservice reinigt unsere Büroräumlichkeiten. Sie
              und ihr Team sind flexibel, gründlich und zuverlässig. Auf jeden
              Fall empfehlenswert!“ primed Group
            </p>
          </ClientsGridItem>
          <ClientsGridItem clientAneli>
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
          </ClientsGridItem>

          <ClientsGridItem playbrush>
            {" "}
            <img src={logoPlaybrush} alt="Logo Playbrush" />
            <p>
              „Playbrush ist sehr zufrieden mit dem Service von Adriana & Ihrem
              Team. Sehr verlässlich, schnell und sauber!“ Playbrush GmbH
            </p>
          </ClientsGridItem>

          <ClientsGridItem ordination>
            <img src="" alt="" />
            <p>
              „Adrianas Reinigungsservice reinigt seit 2012 unsere
              Räumlichkeiten.“ Ordination Dr. Elmar Beckmann, Psychiatrie
            </p>
          </ClientsGridItem>
        </ClientsGridContainer>
      </div>
    </MaxWidth>
  );
}
