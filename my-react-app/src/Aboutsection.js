import React from 'react';
import './Aboutsection.css';

class Aboutsection extends React.Component {
    render() {return (
        <div className="Aboutsection">
            <h1 className="Aboutsection-header">About Me</h1>
                <p>
                    This is a simple React app created to study and flex. 
                    It includes a simple yobas and a button that copies an email to the clipboard. 
                    Other buttons are just links to my social media profiles.
                    The navigation bar will hide when you scroll down and show when you scroll up.
                </p>
            </div>
        );
    }
}

export default Aboutsection;