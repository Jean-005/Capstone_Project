const Profile = (driver) => {

    return (
        <>
            <h3>My Profile</h3>
            <p>{driver.name}</p>
            <p>{driver.emailAddress}</p>
            <p>{driver.phone}</p>

        </>
    );
}

export default Profile;