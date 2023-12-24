import { FC } from "react";
import { HeaderContainer } from "./Header.styles";
import { Link, NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <span>
        <Link to="/cities">OpenHouse</Link>
      </span>

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
