export function PostsIndex(props) {
  return (
    <div id="posts-index">
      <h1> All Posts</h1>
      {props.posts.map((post) => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
