import { useEffect, useRef, useState } from "react";

const useValidation = (email, password) => {
  const [availability, setAvailability] = useState(true);
  // const [state, setState] = useState(false);
  // 비밀번호 확인이 존재하지 않으면 무조건 true이 되어야 함
  // 비밀번호 확인이 존재할 경우 비밀번호 값과 같아야 true이 되어야 함
  // const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    console.log(email);
    console.log(password);

    const valid =
      email && password
        ? email.includes("@") && password.length >= 8
          ? true
          : false
        : false;

    if (!valid) {
      console.log("false");
    }

    if (valid) {
      setAvailability(false);
    } else {
      setAvailability(true);
    }
  }, [email, password]);
  return availability;
};

export default useValidation;
