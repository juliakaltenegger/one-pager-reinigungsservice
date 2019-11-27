import styled from "styled-components";

const StyledBanner = styled.img`
  /* If you set a fixed width and a max-width , this means the following: If the width goes above max-width , keep it at max-width . If the width is below max-width , keep it on width . */
  width: 100%;
  top: 0;
  left: 0;
  position: relative;
`;

export default StyledBanner;
