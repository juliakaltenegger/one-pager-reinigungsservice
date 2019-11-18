import React from "react";
import logo from "./logo.png";

//photos team
import adrianaPhoto from "./team-placeholder1.jpeg";
import adrianaPhoto2 from "./team-placeholder2.jpeg";
import dogPhoto from "./dog-placeholder.jpeg";

export default Team;

function Team() {
  return (
    <>
      <div classname="unser-team" id="team">
        <h2>Unser Team</h2>
        <div classname="team-photos">
          <img src={adrianaPhoto} alt="Geschäftsführerin Adriana" />
          <img src={dogPhoto} alt="Hund" />
          <img src={adrianaPhoto2} alt="Teammitglied" />
        </div>
        <div classname="intro-adriana">
          <h3>Adriana</h3>
          <p>
            In Rumänien geboren, lebt Sie seit vielen Jahren in Wien. Sie hat
            2012 ihre Meisterprüfung in Denkmal-, Fassaden- und Gebäudereinigung
            absolviert. Adriana hat alles im Griff!
          </p>
        </div>
        <div classname="intro-dog">
          <h3>Kaya</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque...
          </p>
        </div>
        <div classname="intro-team1">
          <h3>Max Mustermann</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div classname="team-services-first-row">
        <img src={logo} alt="" />
        <h3>Dana Reinigungsservice</h3>
        <img src={logo} alt="" />
        <h3>Dana Reinigungsservice</h3>
        <img src={logo} alt="" />
        <h3>Dana Wäscherei</h3>
      </div>
      <div classname="team-services-second-row">
        <img src={logo} alt="" />
        <h3>Marianne Reinigungsservice</h3>
        <img src={logo} alt="" />
        <h3>Marianne Reinigungsservice</h3>
        <img src={logo} alt="" />
        <h3>Marianne Reinigungsservice</h3>
      </div>
    </>
  );
}
