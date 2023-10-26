import React from 'react'
import './feature.css'
const Feature = ({ title, text }) => {
    return (
        <div className='feature '>
            <h1 className='feature-title'>{title}</h1>
            <p className='feature-info'>{text}</p>
        </div>);
}

export default Feature;