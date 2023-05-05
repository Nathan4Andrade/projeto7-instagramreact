import React from "react";

export default function Post(props) {
  const [bookmark, setBookmark] = React.useState(false);
  const bookmarkAtual = bookmark ? "bookmark" : "bookmark-outline";

  const [heart, setHeart] = React.useState(false);
  const heartAtual = heart ? "heart" : "heart-outline";
  const [heartColor, setHeartColor] = React.useState(false);
  const heartColorAtual = heartColor ? "heart-red" : "heart-black";

  let [likes, setLikes] = React.useState(
    Math.floor(Math.random() * 100000) + 100000
  );

  function likePost() {
    setHeart(!heart);
    setHeartColor(!heartColor);
    if (!heart) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  }

  function likeByImg() {
    if (heartAtual === "heart-outline") {
      likePost();
    }
  }

  return (
    <div class="post" data-test="post">
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
        <img
          data-test="post-image"
          onClick={likeByImg}
          src={props.media}
          alt={props.mediaAlt}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={likePost}
              name={heartAtual}
              class={heartColorAtual}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
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
              <span data-test="likes-number">
                {likes.toLocaleString("pt-BR", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}{" "}
              </span>
              pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
