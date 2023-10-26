import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components';
const WhatGPT3 = () => {
    return (<>
        <div className='gpt3-whatgpt3 section-padding' id='What'>
            <div className='gpt3-whatgpt3-features section-padding'>
                <div className='gpt3-whatgpt3-features-title'>
                    <Feature title='what is GPT' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
                </div>
                <div className='gpt3-whatgpt3-features-beyond gradient-text'>
                    <h1 className='gpt3-beeyond-title'>The possibilities are beyond your imagination</h1>
                    <h6 className='gpt3-beeyond-explore'>Explore The Library</h6>
                </div>
                <div className='gpt3-whatgpt3-features-rest'>
                    <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.' />

                    <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments' />

                    <Feature title='Educations' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments ' />
                </div>
            </div>
        </div>
    </>);
}

export default WhatGPT3;