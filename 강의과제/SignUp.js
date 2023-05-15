import BasicButton from "../../../../components/Button/Button";
import * as S from "../style";
import useInputs from "../../../../hooks/use-inputs";
import styled from "styled-components";
import useValidation from "../../../../hooks/use-validation";

const SignUpForm = () => {
  // state를 하나로 만들기 위해..
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isAble = useValidation(email, password);
  console.log(isAble);
  const availability = !isAble && password === passwordConfirm ? false : true;

  return (
    <S.Form>
      <S.InputBox>
        <label>이메일</label>
        <input onChange={onChangeForm} name="email" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호</label>
        <input onChange={onChangeForm} name="password" />
      </S.InputBox>
      <S.InputBox>
        <label>비밀번호 확인</label>
        <input onChange={onChangeForm} name="passwordConfirm" />
      </S.InputBox>
      {availability && <ErrorMessage>🤷‍♀️Try Again🤷‍♀️</ErrorMessage>}
      <BasicButton
        size={"full"}
        shape={"default"}
        variant={availability ? "gray" : "primary"}
        disabled={availability}
      >
        회원가입
      </BasicButton>
    </S.Form>
  );
};

export default SignUpForm;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.PALETTE.error};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  line-height: ${({ theme }) => theme.FONT_LINE.large};
`;
