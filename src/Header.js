import React from "react";
import logo from "./logo.png";
import banner from "./banner.jpg";

export default Header;

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="nav-bar">
          <a href="#up">
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
              <a href="#kunden">Kunden</a>
            </li>
            <li>
              {" "}
              <a href="#kontakt">Kontakt/</a>
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
        <div className="leistungen">
          <div className="unterhaltsreinigung">
            <h2>Unterhaltsreinigung</h2>
            <p>
              Periodische Reinigung der Oberflächen eines Objektes oder Raumes
              und seine Einrichtungen. Sie erhält den gewünschten oder
              geforderten Zustand des Haushalts. Typische Arbeiten sind
              Staubwischen, Staubsaugen, Fußboden wischen, Nassreinigung der
              Sanitärobjekte und Abfallbeseitigung.
            </p>
          </div>
          <div className="sonderreinigung">
            <h2>Sonderreinigung</h2>
            <p>
              Reinigungen, die über den Rahmen der Unterhalts- und
              Zwischenreinigung hinausgehen, werden in der Regel als
              Einzelaufträge vergeben. Glasreinigung, Fensterreinigung mit Stock
              und Rahmen, Fleckenentfernung (Textilbeläge).
            </p>
          </div>
          <div className="sonderreinigung-zwei">
            <h2>Sonderreinigung</h2>
            <p>
              Im Zuge der Grundreinigung werden haftende Verschmutzungen, aber
              auch abgenutzte Pflegefilme, respektive deren Rückstände, die das
              Aussehen der Oberfläche beeinträchtigen, sukzessive entfernt. Eine
              Grundreinigung wird unter Berücksichtigung der Flächenart und im
              Allgemeinen nur in größeren Zeitabständen durchgeführt.
            </p>
          </div>
          <div className="unsere-waescherei">
            <h2>Unsere Wäscherei</h2>
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
            <h2>Airbnb Service</h2>
            <ul>
              <li>Reinigung</li>
              <li>Schlüsselübergabe</li>
              <li>Übergabe</li>
              <li>Koordination</li>
            </ul>
          </div>
          <div classname="bio-reinigung">
            <h2>Bio Reinigung</h2>
            <p>
              Bei Interesse führen wir gerne Beratungsgespräche über die
              Möglichkeiten mit umweltfreundlichen Reinigungsmitteln zu
              arbeiten. Besonders gefragt sind diese sehr gut verträglichen
              Mitteln im Bereichen der Ordinationsreinigung
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
