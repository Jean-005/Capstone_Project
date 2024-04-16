import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Registration = ({addNewDriver}) => {
    const [registerOpen, setRegisterOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
        role: '',
        phone: '',
        email: '',
    });

    const handleRegisterOpen = () => {
        setRegisterOpen(true);
    };

    const handleRegisterClose = () => {
        setRegisterOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.role) {
            alert("Role is required");
            return;
        }

        if (!formData.phone.trim()) {
            alert("Phone Number is required");
            return;
        }

        if (!formData.email.trim()) {
            alert("Email is required");
            return;
        }

        if (!formData.password.trim()) {
            alert("Password is required");
            return;
        } else if (formData.password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        handleRegisterClose();
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleRegisterOpen}>
                Register
            </Button>
            <Dialog
                open={registerOpen}
                onClose={handleRegisterClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const username = formJson.username;
                        const password = formJson.password;
                        const role = formJson.role;
                        const phone = formJson.phone;
                        const email = formJson.email;
                        const driver = {
                            name: username,
                            emailAddress: email,
                            password: password,
                            role: role,
                            phone: phone
                        }
                        addNewDriver(driver)
                        handleRegisterClose();
                    },
                }}
            >
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your details to register.
                    </DialogContentText>
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
                        onChange={(event) => setFormData({ ...formData, username: event.target.value })}
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
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    />
                    <FormControl fullWidth required variant="standard">
                        <InputLabel id="role-label">Company Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={(event) => setFormData({ ...formData, role: event.target.value })}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Driver">Driver</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        margin="dense"
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        type="tel"
                        fullWidth
                        variant="standard"
                        onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRegisterClose}>Cancel</Button>
                    <Button type="submit">Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}
 
export default Registration;