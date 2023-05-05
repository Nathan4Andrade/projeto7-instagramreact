export default function User(props) {
  return (
    <div class="usuario">
      <img src={props.link} alt="imagem de perfil" />
      <div class="texto">
        <span>
          <strong>{props.username}</strong>
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
