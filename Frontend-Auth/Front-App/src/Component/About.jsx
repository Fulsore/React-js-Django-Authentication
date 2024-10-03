import { Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h1" component="h1">About Me</Typography>
            <Typography variant="h2" component="h2">Name: F Anil Kumar</Typography>
            <Typography variant="h3" component="h3">College: [Malla Reddy College Of Engineering And Technology]</Typography>
            <Typography variant="body1" sx={{ marginTop: '20px' }}>
                Welcome to my authentication and authorization web application! This project is built using 
                <strong> Vite</strong>, <strong>React.js</strong>, and <strong>Django</strong> with Material UI for a seamless user experience. 
                The application allows users to securely register, log in, and manage their accounts.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
                Key features of this application include:
                <ul>
                    <li>User Registration: Create a new account easily.</li>
                    <li>User Login: Access your account securely.</li>
                    <li>Role-Based Access: Differentiate user permissions.</li>
                    <li>Token-Based Authentication: Ensures secure access to protected resources.</li>
                </ul>
            </Typography>
        </Box>
    );
}

export default About;
