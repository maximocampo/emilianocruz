import React, {useState} from "react"
import { Link } from "gatsby"

//const PostLink = ({ post }) => (
//  <article className="card ">
//    <Link to={post.frontmatter.path}>
//      {!!post.frontmatter.thumbnail && (
//        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
//      )}
//    </Link>
//    <header>
//      <h2 className="post-title">
//        <Link to={post.frontmatter.path} className="post-link">
//          {post.frontmatter.title}
//        </Link>
//      </h2>
//      <div className="post-meta">{post.frontmatter.date}</div>
//    </header>
//  </article>
//)

const PostLink = ({ left, post , x, y}) => {
    const [hover, setHover] = useState(false)
    
    return (
        <div className="item-link-container" style={{top: y, left: x}}>
            {left ? (
                <>
                <p className="item-link-title" style={{display: hover ? 'block' : 'none'}}>{post.title}</p>
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="item-link"
                />)
                </>
            ) : (
                <>
                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="item-link"
                />
                <p className="item-link-title" style={{display: hover ? 'block' : 'none'}}>{post.title}</p>
                </>
            )}
        </div>
    )
}
export default PostLink
