import React from "react";
import styled from "styled-components";

import MaxWidth from "./MaxWidth.js";

//photos team large
import adrianaPhoto from "./assets/adriana.png";
import adrianaPhoto2 from "./assets/team2.png";
import dogPhoto from "./assets/team-dog.png";

//photos team small
import dana1 from "./assets/dana1.png";
import dana2 from "./assets/dana2.png";
import dana3 from "./assets/dana3.png";
import marianne1 from "./assets/marianne1.png";
import marianne2 from "./assets/marianne2.png";
import marianne3 from "./assets/marianne3.png";

export default Team;

const TeamSection = styled.section`
  padding: 60px 0px 60px 0px;
`;

const TeamTopGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  margin: 50px 50px 5px 50px;
`;
const TeamTopGridItem = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 0px 20px 0px 20px;
  line-height: 20px;

  & img {
    width: 300px;
    height: auto;
  }
`;

const TeamBottomGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`;

// const TeamBottomGridItem = styled.div`
//   font-size: 30px;
//   text-align: center;
//   padding: 0px 20px 0px 20px;
//   line-height: 20px;

//   & img {
//     width: 80px;
//     height: auto;
//   }
// `;

function Team() {
  return (
    <>
      <MaxWidth className="maxwidth-team">
        <TeamSection>
          <div className="team" id="team">
            <h2>Unser Team</h2>
            <TeamTopGridContainer>
              <TeamTopGridItem>
                <img src={adrianaPhoto} alt="Geschäftsführerin Adriana" />
              </TeamTopGridItem>

              <TeamTopGridItem>
                <img src={dogPhoto} alt="Hund" />
              </TeamTopGridItem>

              <TeamTopGridItem>
                <img src={adrianaPhoto2} alt="Teammitglied" />
              </TeamTopGridItem>
              <TeamTopGridItem className="intro-adriana">
                <h3>Adriana</h3>
                <p>
                  In Rumänien geboren, lebt Sie seit vielen Jahren in Wien. Sie
                  hat 2012 ihre Meisterprüfung in Denkmal-, Fassaden- und
                  Gebäudereinigung absolviert. Adriana hat alles im Griff!
                </p>
              </TeamTopGridItem>
              <TeamTopGridItem className="intro-dog">
                <h3>Kaya</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque...
                </p>
              </TeamTopGridItem>
              <TeamTopGridItem className="intro-team1">
                <h3>Max Mustermann</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </TeamTopGridItem>
            </TeamTopGridContainer>
          </div>
          <hr />
          <TeamBottomGridContainer>
            <div className="team-services-first-row">
              <img src={dana1} alt="" />
              <h3>Dana Reinigungsservice</h3>
              <img src={dana2} alt="" />
              <h3>Dana Reinigungsservice</h3>
              <img src={dana3} alt="" />
              <h3>Dana Wäscherei</h3>
            </div>
            <div className="team-services-second-row">
              <img src={marianne1} alt="" />
              <h3>Marianne Reinigungsservice</h3>
              <img src={marianne2} alt="" />
              <h3>Marianne Reinigungsservice</h3>
              <img src={marianne3} alt="" />
              <h3>Marianne Reinigungsservice</h3>
            </div>
          </TeamBottomGridContainer>
        </TeamSection>
      </MaxWidth>
    </>
  );
}
