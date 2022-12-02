import React, {useState} from "react"
import useWindowSize from "../useWindowSize";

const PostLink = ({ left, post , x, y}) => {
    const [hover, setHover] = useState(false)
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize();
    
    console.log(post)
    
    return (
        <>
            <div className="item-link-container" style={{top: y, left: x}}>
                {left ? (
                    <>
                    <p className="item-link-title" style={{display: width < 480 ? 'block' : hover ? 'block' : 'none'}}>{post.title}</p>
                    <div
                        onClick={() => setOpen(true)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="item-link"
                    />)
                    </>
                ) : (
                    <>
                    <div
                        onClick={() => setOpen(true)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="item-link"
                    />
                    <span className="item-link-title" style={{display: width < 480 ? 'block' : hover ? 'block' : 'none'}}>{post.title}</span>
                    </>
                )}
            </div>
            {open && <div onClick={() => setOpen(false)} className="info-modal-container">
                <div className="info-modal">
                    <p style={{fontFamily: 'Times', fontStyle: 'italic'}}>
                        {post.body}
                    </p>
                </div>
            </div>}
        </>
    )
}

export default PostLink
