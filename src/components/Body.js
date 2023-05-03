import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

export default function Body() {
  return (
    <main>
      <div className="feed">
        <Stories />
        <Posts />
      </div>
      <div className="sidediv">
        <SideBar />
      </div>
    </main>
  );
}
