import { useEffect, useState } from "react";
import Q3components from "../../components/1.basic/q3components";
import Timer from "./timer";

function Q3() {
  const [state, setState] = useState(false);
  // const [num, setNum] = useState(0);
  const getStart = () => {
    setState(!state);
  };

  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {state && <Timer />} </p>
        {state && <Q3components />}
        <p>
          <button onClick={getStart}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={getStart}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );
}
export default Q3;
