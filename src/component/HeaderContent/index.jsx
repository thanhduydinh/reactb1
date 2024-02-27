import "./style.css";

function HeaderContent() {
  return (
    <div className="headerContent__wrapper">
      <div className="header__left">
        <h3>Data Tables</h3>
        <span>advance tables</span>
      </div>

      <div className="header__right">
        <ul>
          <li>
            <i className="fa-solid fa-gauge"></i>
            <p>Home</p>
          </li>
          <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Tables</p>
          </li>
          <li>
            <i className="fa-solid fa-angle-right"></i>
            <p>Data tables</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderContent;
