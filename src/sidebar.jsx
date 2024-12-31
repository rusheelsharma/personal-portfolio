import React from "react";
import profilePic from './assets/rusheel.jpg';
import linkedin from './assets/linkedin-logo.png';
import github from './assets/github.png';
import email from './assets/email.png';

const Sidebar = () => {

    const copyToClipboard = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText("rusheel.sharma@gmail.com")
            .then( () => {
                alert("Email copied to clipboard");
            })
            .catch( () => {
                alert("Failed to copy. Try again");
            });
    }

    return (
        <div className="left-side-bar">
            <div className="image-and-name">
                <img className="profile-pic" src={profilePic} alt="Profile" />
                <h2>Rusheel Sharma</h2>
            </div>
            <div id="links">
                <a href="https://www.linkedin.com/in/rusheelsharma/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>

                <a href="https://www.github.com/rusheelsharma" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>

                <a href = "#" onClick = {copyToClipboard}>

                <img id = "email-icon" src = {email} alt = "Email" />

                </a>


            </div>
        </div>
    );

};

export default Sidebar;
