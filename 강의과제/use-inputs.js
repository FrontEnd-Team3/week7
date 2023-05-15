import { useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // 실무에서 잘 사용되지 않는 방식이라는 팀원분들의 피드백이 있었음
  // onChange에 넣어보기
  // const onSubmit = () => {
  //   if (!values["email"].includes("@") || values["password"].length < 8) {
  //     alert("아이디와 비밀번호 양식을 확인해주세요.");
  //   }
  // };

  return [values, onChange, setValues];
};

export default useInputs;
