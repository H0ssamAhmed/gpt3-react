import './blog.css'
import Article from '../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from '../blog/imports';
const Blog = () => {
    return (
        <>
            <div className='gpt3-blog container' id='Library'>
                <div className='gpt3-articles-heading'>
                    <h1 className='gradient-text'>A lot is happening,<br /> We are blogging about it.</h1>
                </div>
                <div className='gpt3-articles-blog'>
                    <div className='gpt3-articles-groupA'>
                        <Article
                            imgUrl={blog1}
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            data='Sep 26, 2023' />
                    </div>
                    <div className='gpt3-articles-groupB'>
                        <Article
                            imgUrl={blog2}
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            data='Sep 26, 2023' />
                        <Article
                            imgUrl={blog3}
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            data='Sep 26, 2023' />
                        <Article
                            imgUrl={blog4}
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            data='Sep 26, 2023' />
                        <Article
                            imgUrl={blog5}
                            title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
                            data='Sep 26, 2023' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;