import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Help = ({}) => {

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
        const { problem, descritption } = formData;


    };

    return (
        <div>

<>
            <h2>Contact Us:</h2>
            <p>Email: JeaniusReactAebels@fakeEmail.com</p>
            <p>Phone: 032484092</p>
            <p>Address: 80 Middlesex Street, London, E1 7EZ</p>
        </>
            <div>
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
        </div>
    );

}
export default Help;