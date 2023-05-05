import React from "react";

export default function User(props) {
  let [loggedUser, setLoggedUser] = React.useState("nxthanandrade");

  return (
    <div class="usuario">
      <img
        onClick={() => setLoggedUser(prompt("Change user"))}
        src={props.link}
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
