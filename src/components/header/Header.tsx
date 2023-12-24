import { FC } from "react";
import { HeaderContainer } from "./Header.styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../button/Button";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <span>
        <Link to="/communities">OpenHouse</Link>
      </span>

      <Button background="#fff" onClick={handleBack}>
        <p>&larr;</p>
      </Button>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/communities"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Communities
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/homes"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Homes
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
