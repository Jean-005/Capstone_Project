import { useState } from "react";
import Registration from "./Registration";

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
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
            <Registration />
        </div>
    );

}

export default Login;

