import Blog from "./blog";

let blogList = [
  {
    id: "unique1",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique2",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique3",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique4",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique5",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique6",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
  {
    id: "unique7",
    title: "Blog Title",
    subTitle: "sub Title",
    content: "This is my first blog and very long line...",
    author: "Username of  the user"
  },
]

//Assignment :
//1. Create a Blog component
//   Title        subTitle
//   Content
//   Author       Read more
//2. Use it in Blogs Component


//my-doubt 
// id also visible how to make it not visible.

function Blogs() {
    return (
        <div className="blogs">
            <h1 className= "blog-heading"> My Blog List</h1>
            <ul className="blog">
                {
                    blogList.map((itemValue) => (
                       <Blog key={itemValue.id} item={itemValue}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Blogs;