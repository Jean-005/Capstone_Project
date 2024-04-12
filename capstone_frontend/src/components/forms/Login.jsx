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

const Login = () => {
    const [registerOpen, setRegisterOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
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
                        const username = formJson.firstName;
                        const password = formJson.lastName;
                        const role = formJson.role;
                        const phone = formJson.phone;
                        const email = formJson.email;
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
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        margin="dense"
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        variant="standard"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRegisterClose}>Cancel</Button>
                    <Button type="submit">Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;

