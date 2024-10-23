import React, { useState } from 'react';
import './skills.css';

const Skill = ({ name, rating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <dl className="skill">
            <dt>{name}</dt>
            <dd>
                {[1, 2, 3, 4, 5].map((star) => (
                    <i
                        key={star}
                        className={`fa fa-star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        {star <= (hoverRating || rating) ? '\u2605' : '\u2606'}
                    </i>
                ))}
            </dd>
        </dl>
    );
};

const Skills = () => {
    const skillsData = {
        Coding: [
            { name: 'JavaScript', rating: 4 },
            { name: 'Python', rating: 3 },
        ],
        Languages: [
            { name: 'English', rating: 5 },
            { name: 'Spanish', rating: 2 },
        ],
        Tools: [
            { name: 'Git', rating: 4 },
            { name: 'Docker', rating: 3 },
        ],
    };

    return (
        <div className="skills-section">
            {Object.keys(skillsData).map((category) => (
                <div key={category} className="skills-category">
                    <h3>{category}</h3>
                    {skillsData[category].map((skill) => (
                        <Skill key={skill.name} name={skill.name} rating={skill.rating} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Skills;