export default function Posts() {
  return (
    <div className="column-post">
      <div className="post">
        <div className="top-post">
          <div className="post-data">
            <img alt="post" src="assets/profile-pictures/red-velvet.jpeg" />
            <h4>redvelvet</h4>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>

        <video width="100%" controls autoplay muted>
          <source src="assets/redvelvet_video.mp4" type="video/mp4" />
        </video>
        <div className="bottom-post">
          <div className="icons">
            <div className="icons-left">
              <ion-icon className="liked" name="heart"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
          <div className="likes">
            <img alt="post" className="profile-picture" src="assets/eu.jpg" />
            <div>
              Curtido por <strong>nathanandrade</strong> e
              <strong>outras 6.987.126 pessoas</strong>
            </div>
          </div>
          <div className="caption">
            <strong>redvelvet </strong> Oops we are on a ride!
          </div>
          <h5>Ver todos os 29.496 comentários</h5>
          <div className="post-reply">
            <p className="reply">
              <strong>nathanandrade</strong> queens!!
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="post-reply">
            <p className="reply">
              <strong>nathanandrade</strong> come to brasil! ❤
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="send-reply">
            <input placeholder="Adcione um comentário" />
            <h5>Publicar</h5>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="top-post">
          <div className="post-data">
            <img alt="post" src="assets/profile-pictures/snsd.jpg" />
            <h4>snsd</h4>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>

        <img alt="post" src="assets/posts/snsd-post.jpeg" />
        <div className="bottom-post">
          <div className="icons">
            <div className="icons-left">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
          <div className="likes">
            <img
              alt="post"
              className="profile-picture"
              src="assets/profile-pictures/red-velvet.jpeg"
            />
            <div>
              Curtido por <strong>redvelvet</strong> e
              <strong>outras 4.946.314 pessoas</strong>
            </div>
          </div>
          <div className="caption">
            <strong>snsd </strong> We are Forever 1!
          </div>
          <h5>Ver todos os 12.293 comentários</h5>
          <div className="post-reply">
            <p className="reply">
              <strong>redvelvet</strong> hwaiting!
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="send-reply">
            <input placeholder="Adcione um comentário" />
            <h5>Publicar</h5>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="top-post">
          <div className="post-data">
            <img alt="post" src="assets/profile-pictures/new_jeans.jpg" />
            <h4>newjeans</h4>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>

        <img alt="post" src="assets/posts/newjeans-post.jpeg" />
        <div className="bottom-post">
          <div className="icons">
            <div className="icons-left">
              <ion-icon className="liked" name="heart"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
          <div className="likes">
            <img alt="post" className="profile-picture" src="assets/eu.jpg" />
            <div>
              Curtido por <strong>nathanandrade</strong> e
              <strong>outras 8.476.258 pessoas</strong>
            </div>
          </div>
          <div className="caption">
            <strong>newjeans </strong> 다 아는 건 아니어도 바라던 대로 말해줘
            say it back
          </div>
          <h5>Ver todos os 70.496 comentários</h5>
          <div className="post-reply">
            <p className="reply">
              <strong>ianmaskk</strong> deusas do kpop
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="post-reply">
            <p className="reply">
              <strong>nathanandrade</strong> omg! ❤
            </p>
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="send-reply">
            <input placeholder="Adcione um comentário" />
            <h5>Publicar</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
