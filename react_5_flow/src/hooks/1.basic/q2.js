import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Child01 from "./child";

function Q2() {
  const [state, setState] = useState(false);

  const use = useRef();
  var arr = [];
  const showCurrent = () => {
    arr.push(use.current.value);
  };

  const onChange = () => {
    setState(!state);
    const arrList = arr.map((v) => <li>{v}</li>);
    return arrList;
  };

  const btn = useRef(true);
  const [state1, setState1] = useState(0);
  const btnfunc = () => {
    setState1(state1 + 1);
    btn.current = !btn.current;
    console.log(btn.current);
  };

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input ref={use} />
        </p>
        <p>
          <button onClick={showCurrent}>추가</button>
        </p>
        <p>
          <button onClick={globalonChange}>제출</button>
        </p>

        <ul>
          {arr.map((bt, idx) => {
            <Child01 name={bt} />;
          })}
          {/* {arrList} */}
        </ul>
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        {btn.current && <Btn onClick={btnfunc}>변경</Btn>}
        {!btn.current && <button onClick={btnfunc}>변경</button>}
      </div>
    </>
  );
}
export default Q2;

const Btn = styled.button`
  color: red;
`;
