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
  padding: 80px 0px 20px 0px;
`;

const TeamTopGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 50px 50px 5px 50px;

  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const TeamTopGridItem = styled.div`
  font-size: 30px;
  text-align: center;
  /* padding: 0px 20px 0px 20px; */
  line-height: 20px;

  & img {
    width: 250px;
    height: auto;
    padding-bottom: 20px;
  }

  & p {
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const TeamBottomGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 50px 0px 0px 110px;

  @media (max-width: 600px) {
    grid-template-columns: auto {auto};
    padding: 50px 0px 0px 35px;
  }
`;

const TeamBottomGridItem = styled.div`
  font-size: 30px;
  padding-bottom: 40px;
  padding-right: 20px;
  line-height: 20px;
  display: grid;
  grid-template-columns: 100px auto;
  text-align: left;

  & img {
    width: 90px;
    height: auto;
    padding-right: 10px;
  }

  & h3 {
    padding: 25px 0px 25px 0px;
    text-transform: none;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
    padding: 0px;

    & h3 {
      font-size: 0.3em;
      padding-top: 10px;
    }

    & img {
      width: 80px;
      height: auto;
      padding-right: 10px;
    }
  }
`;

function Team() {
  return (
    <>
      <MaxWidth className="maxwidth-team">
        <TeamSection id="team">
          <div>
            <h2>Unser Team</h2>
            <TeamTopGridContainer>
              <TeamTopGridItem className="intro-adriana">
                <img src={adrianaPhoto} alt="Geschäftsführerin Adriana" />
                <h3>Adriana</h3>
                <p>
                  In Rumänien geboren, lebt Sie seit vielen Jahren in Wien. Sie
                  hat 2012 ihre Meisterprüfung in Denkmal-, Fassaden- und
                  Gebäudereinigung absolviert. Adriana hat alles im Griff!
                </p>
              </TeamTopGridItem>

              <TeamTopGridItem className="intro-dog">
                <img src={dogPhoto} alt="Hund" />
                <h3>Kaya</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque...
                </p>
              </TeamTopGridItem>

              <TeamTopGridItem className="intro-team1">
                <img src={adrianaPhoto2} alt="Teammitglied" />
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
            <TeamBottomGridItem>
              <img src={dana1} alt="" />
              <h3>
                DANA <br /> Reinigungsservice
              </h3>{" "}
            </TeamBottomGridItem>

            <TeamBottomGridItem>
              <img src={dana2} alt="" />
              <h3>
                DANA <br /> Reinigungsservice
              </h3>{" "}
            </TeamBottomGridItem>

            <TeamBottomGridItem>
              <img src={dana3} alt="" />
              <h3>
                DANA
                <br />
                Wäscherei
              </h3>
            </TeamBottomGridItem>
            <TeamBottomGridItem>
              <img src={marianne1} alt="" />
              <h3>
                MARIANNE
                <br /> Reinigungsservice
              </h3>
            </TeamBottomGridItem>

            <TeamBottomGridItem>
              <img src={marianne2} alt="" />
              <h3>
                MARIANNE <br /> Reinigungsservice
              </h3>
            </TeamBottomGridItem>

            <TeamBottomGridItem>
              <img src={marianne3} alt="" />
              <h3>
                MARIANNE <br /> Reinigungsservice
              </h3>
            </TeamBottomGridItem>
          </TeamBottomGridContainer>
        </TeamSection>
      </MaxWidth>
    </>
  );
}
