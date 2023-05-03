export default function SideBar() {
  return (
    <aside class="sidebar">
      <div class="user">
        <img
          class="profile-picture"
          src="assets/eu.jpg"
          alt="foto-do-usuario"
        />
        <div class="data">
          <h3>nathanandrade</h3>
          <h4>Nathan Andrade</h4>
        </div>
      </div>
      <div class="sugestions">
        <div class="sugestions-top">
          <p>Sugestoes</p>
          <p>Ver tudo</p>
        </div>
        <div class="profile-list">
          <div class="profile-sugestion">
            <div class="info">
              <img alt="profile" src="assets/profile-pictures/nmixx.jpg" />
              <div class="profile-info-data">
                <h4>nmixx</h4>
                <p>Segue você</p>
              </div>
            </div>
            <h4 class="follow">Seguir</h4>
          </div>
          <div class="profile-sugestion">
            <div class="info">
              <img alt="profile" src="assets/profile-pictures/gfriend.jpg" />
              <div class="profile-info-data">
                <h4>gfriend</h4>
                <p>Segue você</p>
              </div>
            </div>
            <h4 class="follow">Seguir</h4>
          </div>
          <div class="profile-sugestion">
            <div class="info">
              <img alt="profile" src="assets/profile-pictures/triples.jpg" />
              <div class="profile-info-data">
                <h4>triple_s</h4>
                <p>Novo no Instagram</p>
              </div>
            </div>
            <h4 class="follow">Seguir</h4>
          </div>
          <div class="profile-sugestion">
            <div class="info">
              <img alt="profile" src="assets/profile-pictures/sunmi.jpg" />
              <div class="profile-info-data">
                <h4>sunmi</h4>
                <p>Segue você</p>
              </div>
            </div>
            <h4 class="follow">Seguir</h4>
          </div>
          <div class="profile-sugestion">
            <div class="info">
              <img alt="profile" src="assets/profile-pictures/mave.jpg" />
              <div class="profile-info-data">
                <h4>mave</h4>
                <p>Segue você</p>
              </div>
            </div>
            <h4 class="follow">Seguir</h4>
          </div>
        </div>
      </div>
      <div class="sidebar-info">
        <h6>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </h6>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
}
