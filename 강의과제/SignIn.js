import BasicButton from "../../../../components/Button/Button";
import * as S from "../style";
import styled from "styled-components";
import useInputs from "../../../../hooks/use-inputs";
import useValidation from "../../../../hooks/use-validation";
import { useEffect } from "react";
import { useState } from "react";

const SignInForm = () => {
  const [{ email, password }, onChangeForm] = useInputs({
    email: "",
    password: "",
  });

  const availability = useValidation(email, password);
  console.log({ availability });

  const onPressSignIn = (e) => {
    e.preventDefault();
    console.log(e.target.email.value, e.target.password.value);
  };

  return (
    <S.Form onSubmit={onPressSignIn}>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input onChange={onChangeForm} name="password" />
      </S.InputBox>
      {availability && <ErrorMessage>🤷‍♀️Try Again🤷‍♀️</ErrorMessage>}
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={availability ? "gray" : "primary"}
        disabled={availability}
      >
        로그인
      </BasicButton>
    </S.Form>
  );
};

export default SignInForm;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.PALETTE.error};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  line-height: ${({ theme }) => theme.FONT_LINE.large};
`;
