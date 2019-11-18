import React from "react";
//icons services
import iconBroom from "./broom-icon.png";
import iconWindow from "./window-icon.png";
import iconBroomSparkling from "./sparkling-broom-icon.png";
import iconWashingMachine from "./washing-machine-icon.png";
import iconBuildingHand from "./building-hand-icon.png";
import iconBio from "./bio-icon.png";

export default Services;

function Services() {
  return (
    <>
      <div className="leistungen" id="service">
        <h2>Unsere Leistungen</h2>
        <div className="unterhaltsreinigung">
          <h3>Unterhaltsreinigung</h3>
          <img src={iconBroom} alt="Icon Besen" />
          <p>
            Periodische Reinigung der Oberflächen eines Objektes oder Raumes und
            seine Einrichtungen. Sie erhält den gewünschten oder geforderten
            Zustand des Haushalts. Typische Arbeiten sind Staubwischen,
            Staubsaugen, Fußboden wischen, Nassreinigung der Sanitärobjekte und
            Abfallbeseitigung.
          </p>
        </div>
        <div className="sonderreinigung">
          <img src={iconWindow} alt="Icon Fenster" />
          <h3>Sonderreinigung</h3>
          <p>
            Reinigungen, die über den Rahmen der Unterhalts- und
            Zwischenreinigung hinausgehen, werden in der Regel als
            Einzelaufträge vergeben. Glasreinigung, Fensterreinigung mit Stock
            und Rahmen, Fleckenentfernung (Textilbeläge).
          </p>
        </div>
        <div className="sonderreinigung-zwei">
          <img src={iconBroomSparkling} alt="Icon Besen" />
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
          <img src={iconWashingMachine} alt="Icon Waschmaschine" />
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
          <img src={iconBuildingHand} alt="Icon Hand unter Gebäude" />
          <h3>Airbnb Service</h3>
          <ul>
            <li>Reinigung</li>
            <li>Schlüsselübergabe</li>
            <li>Übergabe</li>
            <li>Koordination</li>
          </ul>
        </div>
        <div classname="bio-reinigung">
          <img src={iconBio} alt="Icon Blatt" />
          <h3>Bio Reinigung</h3>
          <p>
            Bei Interesse führen wir gerne Beratungsgespräche über die
            Möglichkeiten mit umweltfreundlichen Reinigungsmitteln zu arbeiten.
            Besonders gefragt sind diese sehr gut verträglichen Mitteln im
            Bereichen der Ordinationsreinigung
          </p>
        </div>
      </div>
    </>
  );
}
