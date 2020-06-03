import styled from "styled-components";

const MaxWidth = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export default MaxWidth;
