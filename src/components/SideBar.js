import User from "./User";
import Suggestions from "./Suggestions";

export default function SideBar() {
  const loggedUser = "nxthanandrade";
  return (
    <div class="sidebar">
      <User username={loggedUser} link={`assets/${loggedUser}.jpg`} />
      <Suggestions />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
