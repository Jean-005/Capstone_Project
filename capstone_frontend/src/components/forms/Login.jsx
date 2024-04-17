import { useState } from "react";
import Registration from "./Registration";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
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
        <h2>Jeanius Delivery</h2>
        <div id="login-page">
            <div id="login-container">
                <h2>Login Form:</h2>
                <form onSubmit={handleSubmit}>
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
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
                <Registration addNewDriver = {addNewDriver}/>
            </div>
            
        </div>
        </>
    );

};

export default Login;

