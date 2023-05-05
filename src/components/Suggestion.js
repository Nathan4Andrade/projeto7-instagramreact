export default function Suggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.profilePicture} alt={props.altProfile} />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">{props.motive}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
