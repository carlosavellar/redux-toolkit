import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import { Fragment } from "react";
function App() {
  const auth = useSelector((state) => state.auth.isAuthenticate);

  return (
    <Fragment>
      {auth && <Header />}
      {!auth && <Auth />}
      {auth && <UserProfile />}
      {auth && <Counter />}
    </Fragment>
  );
}

export default App;
