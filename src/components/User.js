import React from "react";

export default function User(props) {
  const [loggedUser, setLoggedUser] = React.useState("nxthanandrade");
  const [profilePicture, setProfilePicture] = React.useState(
    "assets/nxthanandrade.jpg"
  );

  return (
    <div class="usuario">
      <img
        data-test="profile-image"
        onClick={() => setProfilePicture(prompt("Change profile picture"))}
        src={profilePicture}
        alt="imagem de perfil"
      />
      <div class="texto">
        <span>
          <strong data-test="name">{loggedUser}</strong>
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={() => setLoggedUser(prompt("Edit name"))}></ion-icon>
        </span>
      </div>
    </div>
  );
}
