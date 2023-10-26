import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.webp'

const Header = () => {
    return (<>
        <div className='gpt3-header container' id='Home'>
            <div className='gpt3-header-content section-padding'>
                <div className='gpt3-header-side'>
                    <h1 className='gpt3-header-heading gradient-text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p className='info'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className='gpt3-header-input'>
                        <input type='email' placeholder='Type Email Address' />
                        <input type='submit' value='Get Started' />
                    </div>
                    <div className='gpt3-header-people'>
                        <img src={people} alt='people-img' />
                        <h6>1,600 people requested access a visit in last 24 hours</h6>
                    </div>
                </div>
                <div className='gpt3-header-side'>
                    <div className='gpt3-header-img-holder'>
                        <img className='ai' src={ai} alt='AI webp' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Header;