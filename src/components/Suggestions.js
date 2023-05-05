import Suggestion from "./Suggestion";

export default function Suggestions() {
  const users = ["gfriend", "mave", "nmixx", "sunmi", "triples"];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {users.map((user) => (
        <Suggestion
          profilePicture={`assets/profile-pictures/${user}.jpg`}
          username={user}
          altProfile={user}
          motive={Math.random() < 0.5 ? "Segue você" : "Novo no Instagram"}
        />
      ))}
    </div>
  );
}
