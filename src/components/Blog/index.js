import React from 'react';
import Icon1 from '../../images/Secure_server.svg';
import Icon2 from '../../images/Secure_server.svg';
import Icon3 from '../../images/Secure_server.svg';
import  { BlogContainer, BlogWrapper,  BlogCard, BlogH1, BlogH2, BlogP, BlogIcon } from './BlogElements'
const Blog = () => {
    return (
        <BlogContainer id="blog">
            <BlogH1> 
                Latest Insights
            </BlogH1>
            <BlogWrapper>
                <BlogCard>
                    <BlogIcon img src={Icon1} />
                    <BlogH2>Security Issues</BlogH2>
                    <BlogP>  </BlogP>
                </BlogCard>

                <BlogCard>
                    <BlogIcon img src={Icon2} />
                    <BlogH2>Cyber Security</BlogH2>
                    <BlogP>  </BlogP>
                </BlogCard>

                <BlogCard>
                    <BlogIcon img src={Icon3} />
                    <BlogH2>Why Employee CyberSecurity Awareness is Crucial</BlogH2>
                    <BlogP>  </BlogP>
                    </BlogCard>
                
            </BlogWrapper>

            
        </BlogContainer>
    )
}

export default Blog
