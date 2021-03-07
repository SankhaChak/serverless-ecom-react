import Signup from "../Auth/Signup";
import NavBar from "../Nav/NavBar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="page">{children}</div>
      <Signup />
    </>
  );
};

export default Layout;
