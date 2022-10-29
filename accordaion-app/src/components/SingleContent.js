const SingleContent=({title, description})=> {
    return (
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn">ดูข้อมูล</button>
                <p>{description}</p>
            </header>
        </article>
    )
}

export default SingleContent