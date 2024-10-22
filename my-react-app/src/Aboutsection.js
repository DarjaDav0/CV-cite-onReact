import React from 'react';
import './Aboutsection.css';
import profile from './profile.jpg';

class Aboutsection extends React.Component {
    render() {
        return (
            <div className="Aboutsection">
                <h2>About Me</h2>
                <div className="Aboutsection-grid">
                    <div className="Aboutsection-img-container">
                        <img
                            src={profile}
                            alt="Profile picture of Darja Davydova"
                            className="Aboutsection-img"
                        />
                    </div>
                    <div className="Aboutsection-text">
                        <p>
                            Hi! I'm Darja Davydova, an IT student at Lapland UAS. <br />
                            I'm passionate about web development and learning new things.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutsection;