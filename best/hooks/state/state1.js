import PlayListMock from "../../__mock__/playList.json";
import axios from "axios";
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

  const [playlist, setPlaylist] = useState(PlayListMock.playlist);
  const [listInput1, setListInput1] = useState("");
  const [listInput2, setListInput2] = useState("");
  const onChange = (e) => {
    if (e.target.name === "titleInput") {
      setListInput1(e.target.value);
      console.log(listInput1);
    }
    if (e.target.name === "singerInput") {
      setListInput2(e.target.value);
      console.log(listInput2);
    }
  };

  const onClick = () => {
    const newSong = {
      title: listInput1,
      signer: listInput2,
    };
    setPlaylist([...playlist, newSong]);
  };

  const onDelete = (i) => {
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(i, 1);
    setPlaylist(updatedPlaylist);
  };

  return (
    <>
      <h1>문제1</h1>
      {playlist.map((a, i) => {
        return (
          <div key={i}>
            <ul>
              {/* list */}
              {/* 예시 데이터입니다 */}
              <li>
                <h3>{a.title}</h3>
                <p>{a.signer}</p>
              </li>
            </ul>
            <button
              onClick={() => {
                onDelete(i);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <div>
        <p>
          곡명 : <input name="titleInput" onChange={onChange} />
        </p>
        <p>
          가수/작곡 : <input name="singerInput" onChange={onChange} />
        </p>
        <p>
          <button onClick={onClick}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
