import './BlogCard.css'

export const BlogCard = (props) => {
    console.log(props)
    return (
       <div className='post'>
            <h2>Post Title</h2>
            <p>Post description</p>
       </div>
    );
};