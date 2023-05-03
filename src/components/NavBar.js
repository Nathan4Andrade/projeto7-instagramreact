export default function NavBar() {
  return (
    <header>
      <div className="top">
        <div className="brand">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="border"></div>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <img className="logo" src="./assets/logo.png" alt="logo" />
          </a>
        </div>

        <div className="search-bar">
          <p>Pesquisar</p>
        </div>
        <div className="navigation">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
      <div class="top-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
          <img className="logo" src="./assets/logo.png" alt="logo" />
        </a>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </header>
  );
}
