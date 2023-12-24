import styled from "styled-components";

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  padding: 18px;
  border-radius: 12px;
  height: 100%;
  max-height: 100%;
  min-width: 295px;
  max-width: 550px;
  border: 1px solid #ccc;
  box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    /* Styles for screens with a minimum width of 768 pixels */
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 640px;
    padding: 20px;
    gap: 20px;
  }

  @media screen and (max-width: 321px) {
    /* Styles for screens with a minimum width of 321 pixels */
    padding: 12px;
  }

  &:hover {
    border: 1px solid #e47b2d;
  }
`;

export const ListCardImageContainer = styled.div`
  align-self: center;
  width: 100%;
  min-height: 100%;
  border-radius: 8px;
  display: grid;
  place-content: center;
  background: red;

  img {
    max-width: 100%;
    max-height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    /* Styles for screens with a minimum width of 768 pixels */
    width: 50%;
    height: 100%;
  }
`;

export const ListCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 12px;

  strong {
    /* text-decoration: underline; */
    color: #888;
    font-weight: 400;
  }

  a {
    text-decoration: underline;
  }

  p:hover a {
    color: #08687d;
  }

  @media screen and (min-width: 768px) {
    /* Styles for screens with a minimum width of 768 pixels */
    width: 50%;
  }
`;
