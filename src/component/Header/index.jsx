import "./style.scss";
import { useState } from "react";

function Header() {
  const [displayStyle, setDisplayStyle] = useState("none");

  const toggleDisplay = () => {
    setDisplayStyle((prevStyle) => (prevStyle === "none" ? "block" : "none"));
  };

  return (
    <header>
      <div className="logo">
        Admin<p>LTE</p>
      </div>

      <div className="navbar">
        <div className="navbar__icon">
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className="navbar__menu">
          <li>
            <i className="fa-solid fa-envelope"></i>
          </li>
          <li>
            <i className="fa-solid fa-bell"></i>
          </li>
          <li>
            <i className="fa-solid fa-flag"></i>
          </li>
          <li onClick={toggleDisplay}>
            <img
              className="img-menunav"
              src="/src/component/img/user2-160x160.jpg"
              alt="/avarta"
            />
            <p>Alexander Pierce</p>

            <div className="dropdown__user" style={{ display: displayStyle }}>
              <div className="dropdown__header">
                <img
                  className="img-user"
                  src="/src/component/img/user2-160x160.jpg"
                  alt=""
                />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </div>
              <div className="dropdown__content">
                <p>Followers</p>
                <p>Sales</p>
                <p>Friends</p>
              </div>
              <div className="dropdown__footer">
                <button>Profile</button>
                <button>Sign out</button>
              </div>
            </div>
          </li>
          <li>
            <i className="fa-solid fa-gears"></i>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
