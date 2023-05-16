import { useState } from "react";
import styled from "styled-components";

function Comment({ post, setPost }) {
  const [btnState, setBtnState] = useState(true);
  const [handleInput, setHandleInput] = useState("");
  const [delBtnState, setDelBtnState] = useState(true);
  const [delBtnState2, setDelBtnState2] = useState(true);

  const handelBtn = (e) => {
    if (e.target.name === "btn1") {
      console.log(btnState);
      setBtnState(false);
    }
    if (e.target.name === "btn2") {
      console.log(btnState);
      setBtnState(false);
    }
  };
  const delBtn = () => {
    setDelBtnState(false);
    console.log(delBtnState);
  };

  const onChangeInput = (e) => {
    setHandleInput(e.target.value);
    console.log(handleInput);
  };

  const handleComment2 = (index) => {
    setBtnState(true);
    const updatedComments = [...post.Comments];
    updatedComments[index].content = handleInput;

    const updatePost2 = {
      ...post,
      Comments: updatedComments,
    };
    setPost(updatePost2);
  };

  const renderComment = (a) => {
    if (!delBtnState) {
      return null;
    } else {
      return (
        <div>
          <p>
            작성자: <span>{a.User.nickname}</span>
          </p>
          <p>
            댓글 내용: <span>{a.content}</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {post.Comments.map(function (a, i) {
        return (
          <S.CommentItem key={i}>
            {a.myComment ? (
              renderComment(a)
            ) : (
              <div>
                <p>
                  작성자: <span>{a.User.nickname}</span>
                </p>
                <p>
                  댓글 내용: <span>{a.content}</span>
                </p>
              </div>
            )}

            {delBtnState ? (
              <div>
                {a.myComment ? (
                  btnState ? (
                    <button onClick={handelBtn} name="btn1">
                      수정
                    </button>
                  ) : null
                ) : null}
                {a.myComment ? (
                  btnState ? (
                    <button onClick={delBtn} name="btn2">
                      삭제
                    </button>
                  ) : null
                ) : null}
                {a.myComment ? (
                  !btnState ? (
                    <div>
                      <input onChange={onChangeInput} />
                      <button
                        onClick={() => {
                          handleComment2(i);
                        }}
                      >
                        완료
                      </button>
                    </div>
                  ) : null
                ) : null}
              </div>
            ) : null}
          </S.CommentItem>
        );
      })}
    </div>
  );
}

export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
