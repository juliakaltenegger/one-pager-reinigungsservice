import React from "react";
import styled from "styled-components";
import MaxWidth from "./MaxWidth.js";
import StyledIcons from "./StyledIcons";

//icons services
import { ReactComponent as BroomIcon } from "./assets/filter-01.svg";
import { ReactComponent as WindowIcon } from "./assets/filter-02.svg";
import { ReactComponent as SparklingBroomIcon } from "./assets/filter-03.svg";
import { ReactComponent as WashingMachineIcon } from "./assets/filter-04.svg";
import { ReactComponent as BuildingHandIcon } from "./assets/filter-05.svg";
import { ReactComponent as BioIcon } from "./assets/filter-06.svg";

const BackgroundServices = styled.section`
  background-color: #f7f2fd;
`;

const ServicesSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
`;

const ServicesGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  margin: 50px 50px 0px 50px;
`;
const ServicesGridItem = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 0px 20px 0px 20px;
  line-height: 20px;

  & ul {
    list-style: none;
    padding: 0px;
  }

  & li {
    padding: 0px;
  }
`;

const StyledBroomIcon = styled(BroomIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;

const StyledWindowIcon = styled(WindowIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;

const StyledSparklingBroomIcon = styled(SparklingBroomIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;
const StyledWashingMachineIcon = styled(WashingMachineIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;
const StyledBuildingHandIcon = styled(BuildingHandIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;
const StyledBioIcon = styled(BioIcon)`
  fill: purple;
  width: 50px;
  height: auto;
  margin-top: 20px;
`;

export default Services;

function Services() {
  return (
    <>
      <BackgroundServices>
        <MaxWidth className="maxwidth-services">
          <ServicesSection className="leistungen" id="service">
            <h2>Unsere Leistungen</h2>
            <ServicesGridContainer>
              <div className="unterhaltsreinigung">
                <ServicesGridItem>
                  <StyledBroomIcon type="img" alt="Icon Besen" />
                </ServicesGridItem>
                <ServicesGridItem>
                  <h3>Unterhaltsreinigung</h3>
                </ServicesGridItem>
                <ServicesGridItem>
                  <p>
                    Periodische Reinigung der Oberflächen eines Objektes oder
                    Raumes und seine Einrichtungen. Sie erhält den gewünschten
                    oder geforderten Zustand des Haushalts. Typische Arbeiten
                    sind Staubwischen, Staubsaugen, Fußboden wischen,
                    Nassreinigung der Sanitärobjekte und Abfallbeseitigung.
                  </p>
                </ServicesGridItem>
              </div>
              <div className="sonderreinigung">
                <ServicesGridItem>
                  <StyledWindowIcon type="img" alt="Icon Fenster" />{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <h3>Sonderreinigung</h3>{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <p>
                    Reinigungen, die über den Rahmen der Unterhalts- und
                    Zwischenreinigung hinausgehen, werden in der Regel als
                    Einzelaufträge vergeben. Glasreinigung, Fensterreinigung mit
                    Stock und Rahmen, Fleckenentfernung (Textilbeläge).
                  </p>
                </ServicesGridItem>
              </div>
              <div className="sonderreinigung-zwei">
                <ServicesGridItem>
                  <StyledSparklingBroomIcon type="img" alt="Icon Besen" />{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <h3>Sonderreinigung</h3>
                </ServicesGridItem>
                <ServicesGridItem>
                  <p>
                    Im Zuge der Grundreinigung werden haftende Verschmutzungen,
                    aber auch abgenutzte Pflegefilme, respektive deren
                    Rückstände, die das Aussehen der Oberfläche beeinträchtigen,
                    sukzessive entfernt. Eine Grundreinigung wird unter
                    Berücksichtigung der Flächenart und im Allgemeinen nur in
                    größeren Zeitabständen durchgeführt.
                  </p>
                </ServicesGridItem>
              </div>
              <div className="unsere-waescherei">
                <ServicesGridItem>
                  <StyledWashingMachineIcon
                    type="img"
                    alt="Icon Waschmaschine"
                  />{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <h3>Unsere Wäscherei</h3>{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <ul>
                    <li>Bettwäsche</li>
                    <li>Lieferung und Abholung</li>
                    <li>Vorhänge</li>
                    <li>Teppiche</li>
                    <li>...</li>
                    <li>Sofaüberzüge</li>
                  </ul>{" "}
                </ServicesGridItem>
              </div>
              <div className="airbnb-service">
                <ServicesGridItem>
                  <StyledBuildingHandIcon
                    type="img"
                    alt="Icon Hand unter Gebäude"
                  />{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <h3>Airbnb Service</h3>{" "}
                </ServicesGridItem>

                <ServicesGridItem>
                  <ul>
                    <li>Reinigung</li>
                    <li>Schlüsselübergabe</li>
                    <li>Übergabe</li>
                    <li>Koordination</li>
                  </ul>{" "}
                </ServicesGridItem>
              </div>
              <div classname="bio-reinigung">
                <ServicesGridItem>
                  <StyledBioIcon type="img" alt="Icon Blatt" />{" "}
                </ServicesGridItem>
                <ServicesGridItem>
                  <h3>Bio Reinigung</h3>{" "}
                </ServicesGridItem>
                <ServicesGridItem>
                  <p>
                    Bei Interesse führen wir gerne Beratungsgespräche über die
                    Möglichkeiten mit umweltfreundlichen Reinigungsmitteln zu
                    arbeiten. Besonders gefragt sind diese sehr gut
                    verträglichen Mitteln im Bereichen der Ordinationsreinigung.
                  </p>
                </ServicesGridItem>{" "}
              </div>
            </ServicesGridContainer>
          </ServicesSection>
        </MaxWidth>
      </BackgroundServices>
    </>
  );
}
