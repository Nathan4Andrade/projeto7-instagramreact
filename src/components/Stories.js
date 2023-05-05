import Story from "./Story";
export default function Stories() {
  const users = [
    "red-velvet",
    "twice",
    "lesserafim",
    "new_jeans",
    "loona",
    "gidle",
    "blackpink",
    "snsd",
  ];

  return (
    <div class="stories">
      {users.map((user) => (
        <Story
          url={`assets/profile-pictures/${user}.jpg`}
          username={user}
          alt={user}
        />
      ))}
    </div>
  );
}
