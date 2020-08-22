import React from "react";
import "./Post.css";
function Post({ data }) {
  return (
    <div className="post">
      <div
        className="post__title"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <div className="post__categories">
        <ul>
          {data.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="post__date">
        <span>Date published: </span>
        <div dangerouslySetInnerHTML={{ __html: data.pubDate }} />
      </div>

      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </div>
  );
}

export default Post;
