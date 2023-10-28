import React from "react";
import Comment from "./Comment"; 

function BlogContent(props) {
  console.log(props);

  if (!props.isPublished) {
    // hide unpublished content
    // return null means "don't display any DOM elements here"
    return null;
  } else {
    // show published content
    return (
      <div>
        <h1>{props.articleText}</h1>
        <p>{props.minutesToRead} minutes to read</p>
        <Comment /> {/* Include the Comment component here */}
      </div>
    );
  }
}

export default BlogContent;
