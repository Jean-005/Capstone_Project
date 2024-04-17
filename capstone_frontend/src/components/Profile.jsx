const Profile = (driver) => {

    return (
        <>
            <h2>My Profile</h2>
            
            <h4>My Details</h4>
            <p>{driver.name}</p>
            <p>{driver.emailAddress}</p>
            <p>{driver.phone}</p>

            <h4>My Vehicle</h4>
            <p>{driver.vehicleType}</p>
            <p>{driver.licensePlateNumber}</p>

        </>
    );
}

export default Profile;