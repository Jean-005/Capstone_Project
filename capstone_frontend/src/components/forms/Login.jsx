import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Login = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  return (
    <div>
      <h2>Login Form:</h2>
      <Button variant="outlined" onClick={handleLoginOpen}>
        Open Login Form
      </Button>
      <Dialog
        open={loginOpen}
        onClose={handleLoginClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const username = formJson.username;
            const password = formJson.password;
            console.log('Username:', username);
            console.log('Password:', password);
            handleLoginClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your username and password to login.
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
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button type="submit">Login</Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" onClick={handleRegisterOpen}>
        Register
      </Button>
      <Dialog
        open={registerOpen}
        onClose={handleRegisterClose}
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
          
          <TextField
            required
            margin="dense"
            id="role"
            name="role"
            label="Company Role"
            type="text"
            fullWidth
            variant="standard"
          />
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