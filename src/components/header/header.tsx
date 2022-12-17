export default function Header(): JSX.Element {
  return (
    <header className="page-header">
      <div className="page-body__container page-header__container">
        <div className="page-header__logo_container">
          <img className="page-header__logo" src="img/train-track.png" width="65" height="65" alt="Logo" />
        </div>
        <div className="page-header__right_container">
          <div className="page-header__logo_text">
            <h1 className="header-info__title">Прогнозирование длительности движения вагонов</h1>
          </div>
          <nav>
            <ul className="header-navigation">
              <li className="header-navigation-item">
                <a className="header-navigation-link header-navigation-link-active" href="">Прогнозирование</a>
              </li>
              <li className="header-navigation-item">
                <a className="header-navigation-link" href="">Информация</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
