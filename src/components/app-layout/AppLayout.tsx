import { FC } from "react";
import { AppContainer } from "./AppLayout.styles";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
};

export default AppLayout;
