import React from 'react'
import './article.css'

export const Article = ({ imgUrl, data, title, }) => {
    return (
        <div className='gpt3-articles-content'>
            <div className='gpt3-articles-content-img'>
                <img src={imgUrl} alt='blog-img' loading='lazy' />
            </div>
            <div className='gpt3-articles-text'>
                <div className='gpt3-articles-text-info'>
                    <span>{data}</span>
                    <h2>{title}</h2>
                </div>
                <button>Read Full article</button>
            </div>
        </div>
    )
}
export default Article
