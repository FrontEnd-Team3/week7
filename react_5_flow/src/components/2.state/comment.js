import { useState } from "react";
import styled from "styled-components";

const Comment = ({ comments }) => {
  return (
    <S.CommentItem>
      {comments.map((v) => (
        <div>
          <p>
            작성자: <span>{v.User.nickname}</span>
          </p>
          <p>
            댓글 내용: <span>{v.content}</span>
          </p>
          <p>
            추가 댓글: <span>{v.mycomment}</span>
          </p>
        </div>
      ))}
    </S.CommentItem>
  );
};
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
