import { FC } from "react";
import { AppContainer } from "./AppLayout.styles";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const AppLayout: FC = () => {
  const isOnline = useOnlineStatus();
  return (
    <>
      <Header />

      <AppContainer>
        {!isOnline && (
          <p className="mx-auto center-text my-4">
            You are not currently subscribed to the internet. Please check your
            internet connection and try again. Thank you
          </p>
        )}
        <Outlet />
      </AppContainer>
    </>
  );
};

export default AppLayout;
