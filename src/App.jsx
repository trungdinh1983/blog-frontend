function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          By: <input type="text" />
        </div>
        <button type="submit">Create post</button>
      </form>
    </div>
  );
}

// function PostsIndex(props) {
//   return (
//     <div id="posts-index">
//       <h1> All Posts</h1>
//       {props.posts.map((post) => (
//         <div className="posts" key={post.id}>
//           <h2>{post.title}</h2>
//           <img src={post.image_url} alt="" />
//           <p>Authour: {post.author}</p>
//           <button>More Info</button>
//         </div>
//       ))}
//     </div>
//   );
// }

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="posts">
        <h2>Burger is amazing</h2>
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipP7HmmF0VuGmHJECHU4nKiHVTtbhOjIF2t3jSGV=s1360-w1360-h1020"
          alt=""
        />
        <p>By: Jane Doe</p>
        <button>More info</button>
      </div>
      <div className="posts">
        <h2>Barbeque is great</h2>
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipMfOZTsUjwouGtt9oXUpvBY2CSb9YkVFwCS_waX=w520-h350-n-k-no"
          alt=""
        />
        <p>By: John Doe</p>
        <button>More info</button>
      </div>
    </div>
  );
}

// function Content() {
//   let posts = [
//     {
//       id: 1,
//       title: "Burger",
//       author: "Jane Doe",
//       image_url: "https://lh3.googleusercontent.com/p/AF1QipP7HmmF0VuGmHJECHU4nKiHVTtbhOjIF2t3jSGV=s1360-w1360-h1020",
//     },
//     {
//       id: 2,
//       title: "BBQ",
//       author: "Jone Doe",
//       image_url: "https://lh5.googleusercontent.com/p/AF1QipMfOZTsUjwouGtt9oXUpvBY2CSb9YkVFwCS_waX=w520-h350-n-k-no",
//     },
//     {
//       id: 3,
//       title: "Mac and Cheese",
//       author: "Jimmy Johnson",
//       image_url:
//         "https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-baking-dish.jpg",
//     },
//   ];

//   return (
//     <div>
//       <PostsNew />
//       <PostsIndex posts={posts} />
//     </div>
//   );
// }

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <PostsNew />
      <PostsIndex />
      <Footer />
    </div>
  );
}

export default App;
