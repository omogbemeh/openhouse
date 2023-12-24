import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  align-items: center;
  background: transparent;
  padding: 0 30px;
  box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 400px) {
    box-shadow: none;
    padding: 0 15px;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  .active {
    text-decoration: underline;
  }
`;
