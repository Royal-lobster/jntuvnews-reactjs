import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post";
import "./PostSection.css";

function PostsSection() {
  const [posts, setPosts] = useState([]);
  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  const URL =
    "https://api.rss2json.com/v1/api.json?rss_url=http://jntukucev.ac.in/feed/";

  useEffect(() => {
    Axios.get(CORS_PROXY + URL)
      .then((res) => setPosts(res.data.items))
      .then();
  }, []);

  useEffect(() => console.log(posts), [posts]);

  return (
    <div className="postsSection">
      {posts.map((post) => (
        <Post data={post} key={post.title} />
      ))}
    </div>
  );
}

export default PostsSection;
