import React from 'react'
import './brand.css'
import {
    atlassian,
    dropbox,
    slack,
    shopify,
    google
} from '../brand/Imports'
const Brand = () => {
    return (<>
        <div className='gpt3-brands'>
            <div className='gpt3-brand'> <img src={atlassian} alt='atlassian png' /> </div>
            <div className='gpt3-brand'> <img src={dropbox} alt='dropbox png' /> </div>
            <div className='gpt3-brand'> <img src={slack} alt='slack png' /> </div>
            <div className='gpt3-brand'> <img src={shopify} alt='shopify png' /> </div>
            <div className='gpt3-brand'> <img src={google} alt='google png' /> </div>

        </div>
    </>);
}

export default Brand;