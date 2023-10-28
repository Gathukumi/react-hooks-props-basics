import React from "react";
import BlogContent from "./BlogContent";

function BlogPost() {
  return (
    <div>
      <BlogContent
        isPublished={true} 
        articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
        minutesToRead={1}
      />
    </div>
  );
}

export default BlogPost;
