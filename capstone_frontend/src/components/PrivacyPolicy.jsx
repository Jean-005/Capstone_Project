import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    const [privacyOpen, setPrivacyOpen] = useState(false);

    return (

        <>
            <Link
                onClick={() => setPrivacyOpen(true)}
            >privacy policy</Link>
            <Dialog
                open={privacyOpen}
            >
                <DialogTitle>Jeanius Delivery Privacy Policy</DialogTitle>
                <DialogContent>
                    <p>
                        privacy policy purpose details going here
                    </p>
                    <p>
                        Legal stuff wil go here
                    </p>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setPrivacyOpen(false)}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default PrivacyPolicy;