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
                <DialogTitle>
                    <h2>Jeanius Delivery Driver Privacy Policy</h2>
                </DialogTitle>
                <DialogContent>
                    <p>This privacy policy explains how Jeanius Delivery uses your information when you work as a driver for our company.</p>
                    <h3>
                        What information do we collect?
                    </h3>
                    <p>
                        We collect various types of data to ensure smooth deliveries and driver well-being:
                    </p>
                    <ul>
                        <li>
                            Driver Information: This includes your name, contact details (phone number, email), and driving license information.
                        </li>
                        <li>
                            Location Data: We use GPS to track your location during deliveries for efficient route planning and task assignment.
                        </li>
                        <li>
                            Delivery Details: Information about the packages you deliver, including pick-up and drop-off locations, contents (if applicable), and any special instructions.
                        </li>
                        <li>
                            Performance Data: We may collect data related to your deliveries, such as successful deliveries, completion times, and customer feedback (if available). This helps us monitor performance and identify areas for improvement.
                        </li>
                    </ul>

                    <h3>
                        Why do we collect your information?
                    </h3>
                    <p>
                        We use your information for several important reasons:
                    </p>
                    <ul>
                        <li>
                            Delivery Management: We use your location data and assigned delivery details to optimize routes, ensure timely deliveries, and provide directions.
                        </li>
                        <li>
                            Communication: We may contact you regarding deliveries, route changes, or any urgent updates related to your tasks.
                        </li>
                        <li>
                            Communication: We may contact you regarding deliveries, route changes, or any urgent updates related to your tasks.
                        </li>
                        <li>
                            Performance Evaluation: We use anonymized performance data to understand overall delivery efficiency and identify areas for driver training or support.
                        </li>
                        <li>
                            Safety and Security: Location tracking and delivery data can be helpful in case of emergencies or resolving delivery issues.
                        </li>
                        <li>
                            Compliance: We may use your information to comply with regulations related to deliveries, driver licensing, or tax requirements.

                        </li>
                    </ul>

                    <h3>
                        When do we need your permission?
                    </h3>
                    <p>
                        In most cases, we rely on our legitimate interest to operate our delivery services efficiently and ensure driver safety. However, there may be situations where we need your consent:
                    </p>
                    <ul>
                        <li>
                            Using your image: If Jeanius Delivery uses driver images for promotional purposes (e.g., website testimonials), we will obtain your explicit consent beforehand.
                        </li>
                        <li>
                            Sharing data with third parties: We generally won't share your information beyond what's necessary for deliveries. However, in specific cases (e.g., using a partner app for background checks), we will obtain your consent before sharing your data.
                        </li>

                    </ul>
                    <h3>
                        How can you control your information?

                    </h3>

                    <p>
                        You have rights regarding your information:
                    </p>
                    <ul>
                        <li>
                            Access and Update: You can contact us to access and update your personal information associated with your driver profile.

                        </li>
                        <li>
                            Location Tracking: You may have the option to disable location tracking on your device, but this could limit your ability to receive delivery tasks.
                        </li>
                    </ul>
                    <h3>
                        For more information:
                    </h3>
                    <p>
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
            </Dialog >

        </>
    );
}

export default PrivacyPolicy;