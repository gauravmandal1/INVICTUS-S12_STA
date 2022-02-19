import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        {/* <span className="postDesc">{post.desc}</span> */}
      
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">{post.title}</span>
        
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
        <span className="postDesc">{post.desc}</span>
      </div>
      </Link>
    </div>
  );
}
