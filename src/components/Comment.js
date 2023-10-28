import React from "react";

function Comment(props) {
  return (
    <div className="comment">
      {props.commentText}
      <div>
 
  <div><p>I agree with this statement. - Angela Merkel</p></div>

  <div><p>A universal truth. - Noam Chomsky</p></div>

  <div>Truth is singular. Its ‘versions’ are mistruths - Sonmi-451</div>
</div>
    </div>
  );
}

export default Comment;
