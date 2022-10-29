import { useState } from "react"

const SingleContent=({title, description})=> {
    const [showContent, setShowContent] = useState(false)
    return (
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>ดูข้อมูล</button>
                {showContent && <p>{description}</p>}
            </header>
        </article>
    )
}

export default SingleContent