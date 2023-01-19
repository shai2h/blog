import './BlogCard.css'

export const BlogCard = (props) => {
    console.log(props)
    return (
       <div className='post'>
            <h2>{ props.title }</h2>
            <p>{ props.description }</p>
       </div>
    );
};