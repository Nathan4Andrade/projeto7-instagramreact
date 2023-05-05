import React from "react";

export default function User(props) {
  const [loggedUser, setLoggedUser] = React.useState("nxthanandrade");
  const [profilePicture, setProfilePicture] = React.useState(
    "assets/nxthanandrade.jpg"
  );

  return (
    <div class="usuario">
      <img
        onClick={() => setProfilePicture(prompt("Change profile picture"))}
        src={profilePicture}
        alt="imagem de perfil"
      />
      <div class="texto">
        <span>
          <strong>{loggedUser}</strong>
          <ion-icon
            name="pencil"
            onClick={() => setLoggedUser(prompt("Change user"))}></ion-icon>
        </span>
      </div>
    </div>
  );
}
