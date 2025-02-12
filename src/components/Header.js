import Logo from "../images/Vector.png";
import Line from "../images/Line.png";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";

export default function Header(props) {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, setIsLoggedIn } =
    useContext(CurrentUserContext);

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <img src={Logo} alt="logo" className="header__logo" />
          {props.text ? (
            <a
              className="header__props-text"
              href={props.text === "Faça o login" ? "/login" : "/register"}
            >
              {" "}
              {props.text}{" "}
            </a>
          ) : null}
          {isLoggedIn ? (
            <div className="header__info">
              <p> {currentUser.name} </p>
              <button className="header__button" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : null}
        </div>
        <img src={Line} alt="line" className="header__line" />
      </header>
    </>
  );
}
