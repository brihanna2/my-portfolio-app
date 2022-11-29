import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  max-width: 950px;
  padding: 5rem 0;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const GoTopWrap = styled.div`
  height: fit-content;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  padding-bottom: 3rem;
  & > div {
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transition: all 0.3s ease-in-out;
      color: #ffdd40;
    }
  }
`;
export const FooterContent = styled.div`
  /* box-shadow: -0.5px 0px 0px 0px white; */
  height: fit-content;
  width: 100%;
  /* padding-left: 1rem; */
`;
export const FooterContentWrap = styled.div`
  height: fit-content;
  width: 100%;
  padding-bottom: 4rem;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1.5em;
  grid-row-gap: 4.5em;
  place-items: center;
  & > * {
    height: fit-content;
    width: 100%;
  }
  @media screen and (max-width: 622px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1.5em;
  }
`;
export const FooterHeading = styled.div`
  height: fit-content;
  & > h3 {
    font-size: 3rem;
    font-weight: 500;
    @media screen and (max-width: 622px) {
      font-size: 2rem;
    }
  }
  & > p {
    font-size: 1rem;
    font-weight: 300;
    color: grey;
    @media screen and (max-width: 622px) {
      font-size: 0.8rem;
    }
  }
`;
export const FooterContactingWrap = styled.div`
  height: fit-content;
  grid-column: 2 / span 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 0.8rem;
  place-self: unset;
  & > p {
    font-size: 1.5rem;
    @media screen and (max-width: 622px) {
      font-size: 1rem;
    }
  }
  & a {
    text-decoration: none !important;
  }
  @media screen and (max-width: 622px) {
    grid-column: unset;
    grid-row: unset;
    margin-top: 0;
  }
`;
export const FooterWrapEmail = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    span {
      font-size: 1rem;
      font-weight: 300;
      color: #b6b6b6;
      @media screen and (max-width: 622px) {
        font-size: 0.9rem;
      }
    }
    & > a {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      @media screen and (max-width: 622px) {
        font-size: 0.8rem;
      }
    }
  }
`;
export const FooterPhone = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    span {
      font-size: 1rem;
      font-weight: 300;
      color: #b6b6b6;
      @media screen and (max-width: 622px) {
        font-size: 0.9rem;
      }
    }
    & > a {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      @media screen and (max-width: 622px) {
        font-size: 0.8rem;
      }
    }
  }
`;
export const FooterSocialIcons = styled.div`
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  & > div {
    margin-top: 1rem;
    & > a {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 400;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:hover {
        transition: all 0.3s ease-in-out;
        color: #ffdd40;
      }
    }
  }
  @media screen and (max-width: 622px) {
    justify-content: flex-start;
  }
`;
