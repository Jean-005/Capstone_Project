import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Help.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import img1 from "./images/deliveryTop.png";

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
            <div className="help-image-container">
                <img src="https://eriks.co.uk/en/know-how-hub/news/eriks-track-and-trace/_jcr_content/content_mainpar/section_1/par/blogimage.coreimg.jpeg/1709281985188/eriks-track-and-trace-combined-graphic-1-pr.jpeg" alt="Image showing landscape" className="help-image"/>
            </div>
            <div className="contact-card-header">
                        <h2>Contact Us</h2>
                    </div>
            <div className="contact-container">
                {/* Email Card */}
                <div className="contact-card">
                    
                    <div className="contact-detail-item">
                        <EmailIcon className="contact-detail-icon" />
                        <span className="contact-detail-text">JeaniusReactAebels@fakeEmail.com</span>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="contact-card">
                    <div className="contact-detail-item">
                        <PhoneIcon className="contact-detail-icon" />
                        <span className="contact-detail-text">032484092</span>
                    </div>
                </div>

                {/* Address Card */}
                <div className="contact-card">
                    <div className="contact-detail-item">
                        <LocationOnIcon className="contact-detail-icon" />
                        <span className="contact-detail-text">80 Middlesex Street, London, E1 7EZ</span>
                    </div>
                </div>
            </div>
            <div className="complaint-form">
                <h2>Complaint Form</h2>
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