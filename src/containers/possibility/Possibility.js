import React from 'react'
import './possibility.css'
import vr from '../../assets/possibility.png'
const Possibility = () => {
    return (
        <>
            <div className='gpt3-possibility container' id='Case'>
                <div className='gpt3-possibility-img-holder'>
                    <div className='gpt3-possibility-img'>
                        <img src={vr} className='vr' alt='vr' loading='lazy' />
                    </div>
                </div>
                <div className='gpt3-possibility-text-content'>
                    <div className='gpt3-possibility-text'>
                        <h1 className='gradient-text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Possibility;