import React from 'react';
import './Aboutsection.css';
import profile from './profile.jpg';

class Aboutsection extends React.Component {
    render() {
        return (
            <div className="Aboutsection">
                <h2>About Me</h2>
                <div className="Aboutsection-content">
                    <img
                        src={profile}
                        alt="Profile picture of Darja Davydova"
                        className="Aboutsection-img"
                    />
                    <p>
                        Hi! I'm Darja Davydova, an IT student at Lapland UAS. 
                        I'm passionate about web development and learning new things.
                    </p>
                </div>
            </div>
        );
    }
}

export default Aboutsection;