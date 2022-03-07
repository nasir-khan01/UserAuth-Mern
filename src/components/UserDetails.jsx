import "../Styles/UserDetails.css";
import { useNavigate } from "react-router-dom";
const UserDetails = ({ profile }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="details">
      <h1 className="main-heading">Your Details</h1>
      <h2>
        <span className="key">Email</span> : {profile.email}
      </h2>
      <h2>
        <span className="key">Password</span> : {profile.password}
      </h2>
      <h2>
        <span className="key">Phone Number</span> : {profile.phoneNumber}
      </h2>
      <h2>
        <span className="key">Address</span> : {profile.completeAddress}
      </h2>
      <h2>
        <span className="key">Zipcode</span> : {profile.zipCode}
      </h2>
      <button className="btn-user" onClick={handleClick}>
        Back to HomePage
      </button>
    </div>
  );
};

export default UserDetails;
