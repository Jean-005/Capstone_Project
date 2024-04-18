import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = ({ driver, currentUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser === null) {
            navigate("/");
        }
    }, []);

    return (
        <div id="profile-page-container" className="branded-page">
            {currentUser
                ?
                <div id="profile-container" className="branded-container">
                    <h1 id="profile-title">My Profile</h1>
                    <div className="branded-container profile-detail-container">
                        <h1>My Details</h1>
                        <div className="profile-details">
                            <p>{driver.name}</p>
                            <p>{driver.emailAddress}</p>
                            <p>{driver.phone}</p>
                        </div>
                    </div>
                    <div className="branded-container profile-detail-container">

                        <h1>My Vehicle</h1>
                        <div className="profile-details">
                            <p>{driver.vehicleType}</p>
                            <p>{driver.licensePlateNumber}</p>
                        </div>

                    </div>
                </div>
                :
                <h1 className="branded-container" >Please Login</h1>
            }
        </div>
    );
}

export default Profile;