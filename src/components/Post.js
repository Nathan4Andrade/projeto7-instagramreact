export default function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.profilePicture} alt={props.altProfile} />
          {props.username}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.media} alt={props.mediaAlt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/nxthanadrade.jpg" alt="nxthanadrade" />
          <div class="texto">
            Curtido por <strong>nathanandrade</strong> e{" "}
            <strong>
              outras {Math.floor(Math.random() * 100) + 100}.
              {Math.floor(Math.random() * 100) + 100} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
