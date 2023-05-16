import PlayListMock from "../../__mock__/playList.json";
import { useState } from "react";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist);

  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();

  const changeState1 = (e) => {
    setInput1(e.target.value);
    // console.log(input1);
  };

  const changeState2 = (e) => {
    setInput2(e.target.value);
    // console.log(input2);
  };

  const [todolist, setTodolist] = useState({
    title: "",
    singer: "",
  });
  const addValue = () => {
    setTodolist((todolist.title = input1));
    setTodolist((todolist.singer = input2));
    PlayListMock.playlist.push({ ...todolist });
    console.log(PlayListMock.playlist);
  };

  // const deleteValue = () => {
  //   setTodolist((todolist.title = input1));
  //   setTodolist((todolist.singer = input2));
  //   console.log(PlayListMock.playlist.indexOf({ ...todolist }));
  // };
  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        <li>
          <h3>Summer</h3>
          <p>Joe Hisaishi</p>
        </li>
      </ul>
      <div>
        <p>
          곡명 : <input onChange={changeState1} />
        </p>
        <p>
          가수/작곡 : <input onChange={changeState2} />
        </p>
        <p>
          <button onClick={addValue}>추가</button>
          <button>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;
