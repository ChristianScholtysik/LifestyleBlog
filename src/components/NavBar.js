import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav id="navigation">
        <NavLink className="logo" to="/">
          LOGO
        </NavLink>

        <NavLink className="nav" to="/">
          Blog
        </NavLink>

        <NavLink className="nav" to="">
          About
        </NavLink>
        <NavLink className="nav" to="/">
          All posts
        </NavLink>
      </nav>
    </>
  );
}
export default NavBar;
