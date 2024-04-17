import { useState } from "react";
import Registration from "./Registration";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";



const Login = ({ drivers, handleUserLogin, addNewDriver }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = formData;

        if (!username.trim()) {
            alert("Username is required");
            return;
        }

        if (!password.trim()) {
            alert("Password is required");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        const driverExistence = drivers.findIndex(driver => driver.name === username);
        const currentDriver = drivers[driverExistence]
        const passwordExistence = drivers.findIndex(driver => driver.password === password);

        if (driverExistence !== -1 && passwordExistence !== -1) {
            handleUserLogin(currentDriver);
            navigate("/driver")

        }
        else { alert("Wrong Username or Password"); }


    };

    return (
        <>
        <div id="login-page">
            <div id="login-header">
            <h1 className="company-name">Jeanius Delivery</h1>
            </div>
            <div id="login-body">
            <div id="login-container">
            <h2 id="account-login">Account Login</h2>
            <div id="login-form-container">
                <form onSubmit={handleSubmit} id="login-form">
                
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="username"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}

                    />
                    <Link to="/">Forgot your password?</Link>
                </form>
                <div id="login-button-container">
                <Button variant="outlined" type="submit" form="login-form">Login</Button>
                <Registration addNewDriver = {addNewDriver}/>
                </div>
                </div>
            </div>
            </div>
        </div>
        <footer className="footer">
        <p>&copy; 2024 Help Desk Inc.   Your privacy and security are important to us. For more information on how we use your data read our <Link to="/privacy-policy">privacy policy</Link>.</p>
  </footer>
        </>
    );

};

export default Login;

