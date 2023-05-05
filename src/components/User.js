import React from "react";

export default function User(props) {
  const [loggedUser, setLoggedUser] = React.useState("nxthanandrade");
  const [profilePicture, setProfilePicture] = React.useState(
    "assets/nxthanandrade.jpg"
  );

  function changeProfile() {
    const newPicture = prompt("Change profile picture");
    if (!newPicture) {
      return;
    }
    setProfilePicture(newPicture);
  }
  function changeUsername() {
    const newUsername = prompt("Edit username");
    if (!newUsername) {
      return;
    }
    setLoggedUser(newUsername);
  }

  return (
    <div class="usuario">
      <img
        data-test="profile-image"
        onClick={changeProfile}
        src={profilePicture}
        alt="imagem de perfil"
      />
      <div class="texto">
        <span>
          <strong data-test="name">{loggedUser}</strong>
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={changeUsername}></ion-icon>
        </span>
      </div>
    </div>
  );
}
