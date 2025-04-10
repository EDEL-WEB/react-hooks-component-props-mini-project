import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>; 
  }

  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
