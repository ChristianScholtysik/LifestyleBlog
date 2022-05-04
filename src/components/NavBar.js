import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav id="navigation">
        <NavLink className="logo" to="./PostsPreview">
          LOGO
        </NavLink>

        <NavLink className="nav" to="./PostsPreview">
          Blog
        </NavLink>

        <NavLink className="nav" to="">
          About
        </NavLink>
        <NavLink className="nav" to="./PostsPreview">
          All posts
        </NavLink>
      </nav>
    </>
  );
}
export default NavBar;
