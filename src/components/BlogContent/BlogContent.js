import { posts } from '../../shared/projectData';
import './BlogContent.css'
import { getAmountPosts } from '../../shared/projectLogic';
import { BlogCard } from '../components/BlogCard';

export const BlogContent = () => {


  const blogPost = posts.map((item) => {
    return (
      <BlogCard
        title={item.title}
        description={item.description}
      />

    )
  })


  


  return (
    <>
      <h1>Blog</h1>
      <div className="posts">
        {blogPost}
      </div>
      

      <div className="count">
        <button onClick={ () => getAmountPosts(posts) } className="btnCount">Get amount of posts</button>
      </div>
    </>
  );
};
