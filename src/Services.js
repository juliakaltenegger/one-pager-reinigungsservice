import React from "react";
// import styled from "styled-components";
import MaxWidth from "./MaxWidth.js";

//icons services
import { ReactComponent as BroomIcon } from "./assets/filter-01.svg";
import { ReactComponent as WindowIcon } from "./assets/filter-02.svg";
import { ReactComponent as SparklingBroomIcon } from "./assets/filter-03.svg";
import { ReactComponent as WashingMachineIcon } from "./assets/filter-04.svg";
import { ReactComponent as BuildingHandIcon } from "./assets/filter-05.svg";
import { ReactComponent as BioIcon } from "./assets/filter-06.svg";

export default Services;

function Services() {
  return (
    <>
      <MaxWidth className="maxwidth-services">
        <div className="leistungen" id="service">
          <h2>Unsere Leistungen</h2>
          <div className="unterhaltsreinigung">
            <BroomIcon type="img" alt="Icon Besen" />

            <h3>Unterhaltsreinigung</h3>

            <p>
              Periodische Reinigung der Oberflächen eines Objektes oder Raumes
              und seine Einrichtungen. Sie erhält den gewünschten oder
              geforderten Zustand des Haushalts. Typische Arbeiten sind
              Staubwischen, Staubsaugen, Fußboden wischen, Nassreinigung der
              Sanitärobjekte und Abfallbeseitigung.
            </p>
          </div>
          <div className="sonderreinigung">
            <WindowIcon type="img" alt="Icon Fenster" />
            <h3>Sonderreinigung</h3>
            <p>
              Reinigungen, die über den Rahmen der Unterhalts- und
              Zwischenreinigung hinausgehen, werden in der Regel als
              Einzelaufträge vergeben. Glasreinigung, Fensterreinigung mit Stock
              und Rahmen, Fleckenentfernung (Textilbeläge).
            </p>
          </div>
          <div className="sonderreinigung-zwei">
            <SparklingBroomIcon type="img" alt="Icon Besen" />
            <h3>Sonderreinigung</h3>
            <p>
              Im Zuge der Grundreinigung werden haftende Verschmutzungen, aber
              auch abgenutzte Pflegefilme, respektive deren Rückstände, die das
              Aussehen der Oberfläche beeinträchtigen, sukzessive entfernt. Eine
              Grundreinigung wird unter Berücksichtigung der Flächenart und im
              Allgemeinen nur in größeren Zeitabständen durchgeführt.
            </p>
          </div>
          <div className="unsere-waescherei">
            <WashingMachineIcon type="img" alt="Icon Waschmaschine" />
            <h3>Unsere Wäscherei</h3>
            <ul>
              <li>Bettwäsche</li>
              <li>Lieferung und Abholung</li>
              <li>Vorhänge</li>
              <li>Teppiche</li>
              <li>...</li>
              <li>Sofaüberzüge</li>
            </ul>
          </div>
          <div className="airbnb-service">
            <BuildingHandIcon type="img" alt="Icon Hand unter Gebäude" />
            <h3>Airbnb Service</h3>
            <ul>
              <li>Reinigung</li>
              <li>Schlüsselübergabe</li>
              <li>Übergabe</li>
              <li>Koordination</li>
            </ul>
          </div>
          <div classname="bio-reinigung">
            <BioIcon type="img" alt="Icon Blatt" />
            <h3>Bio Reinigung</h3>
            <p>
              Bei Interesse führen wir gerne Beratungsgespräche über die
              Möglichkeiten mit umweltfreundlichen Reinigungsmitteln zu
              arbeiten. Besonders gefragt sind diese sehr gut verträglichen
              Mitteln im Bereichen der Ordinationsreinigung
            </p>
          </div>
        </div>
      </MaxWidth>
    </>
  );
}
