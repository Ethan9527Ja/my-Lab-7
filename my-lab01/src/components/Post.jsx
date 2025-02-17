const Posts = ({currentPosts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return(
       <ul className="list-group">
        {/* <li className="list-group-item">Hello World</li> */}
        {currentPosts.map((post) =>(
            <li key={post.id} className="list-group-item">
                {post.title}
            </li>
        ))}
       </ul>
    )
}
export default Posts;