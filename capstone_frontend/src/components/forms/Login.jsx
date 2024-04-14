import { useState } from "react";
import Registration from "./Registration";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = () => {


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
        console.log(username)
        console.log(password)

    };

    return (
        <div>
            <div>
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
                />
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
            </div>
            <Registration />
        </div>
    );

}

export default Login;

