import Navbar from "./Navbar";
import "../Styles/home.css";
const Home = ({ setLoginUser }) => {
  return (
    <>
      <Navbar setLoginUser={setLoginUser} />
      <div className="home">
        <h1>Hello From Homepage</h1>
      </div>
    </>
  );
};
export default Home;
