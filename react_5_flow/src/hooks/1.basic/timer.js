import { useEffect, useState } from "react";

const Timer = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 작동");
      setNum(num + 1);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [num]);
  return <div>{num}</div>;
};

export default Timer;
