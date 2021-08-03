import classes from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticate);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {console.log(auth, "___ www")}
      {!auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
