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
                        Jeanius Delivery Driver Privacy Policy
                        This privacy policy explains how Jeanius Delivery uses your information when you work as a driver for our company.
                        What information do we collect?
                        We collect various types of data to ensure smooth deliveries and driver well-being:
                        Driver Information: This includes your name, contact details (phone number, email), and driving license information.
                        Location Data: We use GPS to track your location during deliveries for efficient route planning and task assignment.
                        Delivery Details: Information about the packages you deliver, including pick-up and drop-off locations, contents (if applicable), and any special instructions.
                        Performance Data: We may collect data related to your deliveries, such as successful deliveries, completion times, and customer feedback (if available). This helps us monitor performance and identify areas for improvement.
                        Why do we collect your information?
                        We use your information for several important reasons:
                        Delivery Management: We use your location data and assigned delivery details to optimize routes, ensure timely deliveries, and provide directions.
                        Communication: We may contact you regarding deliveries, route changes, or any urgent updates related to your tasks.
                        Performance Evaluation: We use anonymized performance data to understand overall delivery efficiency and identify areas for driver training or support.
                        Safety and Security: Location tracking and delivery data can be helpful in case of emergencies or resolving delivery issues.
                        Compliance: We may use your information to comply with regulations related to deliveries, driver licensing, or tax requirements.
                        When do we need your permission?
                        In most cases, we rely on our legitimate interest to operate our delivery services efficiently and ensure driver safety. However, there may be situations where we need your consent:
                        Using your image: If Jeanius Delivery uses driver images for promotional purposes (e.g., website testimonials), we will obtain your explicit consent beforehand.
                        Sharing data with third parties: We generally won't share your information beyond what's necessary for deliveries. However, in specific cases (e.g., using a partner app for background checks), we will obtain your consent before sharing your data.
                        How can you control your information?
                        You have rights regarding your information:
                        Access and Update: You can contact us to access and update your personal information associated with your driver profile.
                        Location Tracking: You may have the option to disable location tracking on your device, but this could limit your ability to receive delivery tasks.
                        For more information:
                        A more detailed privacy policy might be available on the Jeanius Delivery internal resources platform (if applicable).
                        If you have any questions about your information or how we use it, please contact the Jeanius Delivery Driver Support team.
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