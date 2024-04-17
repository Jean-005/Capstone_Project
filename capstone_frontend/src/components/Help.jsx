import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Help.css";

const Help = ({currentUser}) => {

    const [formData, setFormData] = useState({
        problem: '',
        description: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { problem, description } = formData;
        const complaint = {
            userId: currentUser.id,
            name: currentUser.name,
            problem: problem,
            description: description
        }
    alert(`Your complaint has been successfully logged.`);
    console.log(complaint);
    };

    return (
        <div className="help-container">
        <div className="contact-info">
            <h2>Contact Us:</h2>
            <p>Email: JeaniusReactAebels@fakeEmail.com</p>
            <p>Phone: 032484092</p>
            <p>Address: 80 Middlesex Street, London, E1 7EZ</p>
        </div>
            <div className="complaint-form">
                <h2>Complaint Form:</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="problem"
                        name="problem"
                        label="Problem"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleInputChange}

                    />
                    <Button variant="outlined" type="submit">Submit</Button>
                </form>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Help Desk Inc.</p>
            </footer>
        </div>
    );

}
export default Help;