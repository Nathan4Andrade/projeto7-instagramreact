import React from "react";

export default function Post(props) {
  const [bookmark, setBookmark] = React.useState(false);
  const bookmarkAtual = bookmark ? "bookmark" : "bookmark-outline";

  const [heart, setHeart] = React.useState(false);
  const heartAtual = heart ? "heart" : "heart-outline";

  let [likes, setLikes] = React.useState(
    Math.floor(Math.random() * 100000) + 100000
  );

  function likePost() {
    setHeart(!heart);
    if (!heart) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

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
        <img onClick={likePost} src={props.media} alt={props.mediaAlt} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={likePost} name={heartAtual}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={() => setBookmark(!bookmark)}
              name={bookmarkAtual}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/nxthanandrade.jpg" alt="nxthanadrade" />
          <div class="texto">
            Curtido por <strong>nathanandrade</strong> e{" "}
            <strong>
              outras{" "}
              {likes.toLocaleString("pt-BR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}{" "}
              pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
