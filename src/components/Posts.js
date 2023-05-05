import Post from "./Post";

export default function Posts() {
  const users = ["red-velvet", "snsd", "new_jeans"];
  return (
    <div class="posts">
      {users.map((user) => (
        <Post
          profilePicture={`assets/profile-pictures/${user}.jpg`}
          username={user}
          altProfile={user}
          media={`assets/posts/${user}.jpg`}
          mediaAlt={user}
        />
      ))}
    </div>
  );
}
