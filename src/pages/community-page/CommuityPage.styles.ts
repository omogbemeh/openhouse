import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  width: 100%;
  min-width: 200px;
  /* max-width: 600px; */
  width: 100%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 40px;
  padding-bottom: 60px;
`;

export const CommunityPageImageContainer = styled.div`
  max-width: 600px;
  height: 100%;
  background: green;
  border-radius: 13px;
  display: grid;
  place-content: center;

  img {
    max-width: 100%;
    max-height: auto;
    object-fit: cover;
    border-radius: 13px;
  }
`;

export const CommunityPageListContainer = styled.div`
  padding: 30px;
`;
