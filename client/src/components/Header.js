import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = () => {
  const isAuth = useSelector(({ auth }) => auth);
  console.log("isAuth", isAuth);

  const renderContent = isAuth => {
    switch (isAuth) {
      case null:
        return "Still deciding";
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <Link to={isAuth ? "/surveys" : "/"} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">{renderContent(isAuth)}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
