

function Blog(props) {
    return (
    <li>
        <div className= "blog-id">{props.item.id}</div>
        <div className= "blog-title">{props.item.title}</div>
        <div className= "blog-subTitle">{props.item.subTitle}</div>
        <div className= "blog-content">{props.item.content}</div>
        <div className= "blog-author">{props.item.author}</div>
        <button className="blog-btn">read more</button>      
    </li>
    )
}


export default Blog;