import Btn from "./Btn";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import LoginImg from "../images/LoginImg.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <ImgBox>
        <img src={LoginImg} alt="." />
      </ImgBox>
      <FormBox>
        <Form className="login">
          <Title>로그인이 필요합니다.</Title>
          <div>
            <span>ID</span>
            <input type="text" name="id" />
          </div>
          <div>
            <span>PW</span>
            <input type="password" name="pw" />
          </div>
          <ButtonBox>
            <Link to="/mainPage">
              <Btn>홈으로</Btn>
            </Link>
            <Link to="/mainPage/Log">
              <Btn>로그인</Btn>
            </Link>
          </ButtonBox>
        </Form>
      </FormBox>
    </>
  );
};

export default LoginForm;
const ImgBox = styled.div`
  display: block;
  width: 35%;
  height: 1000px;
  background: red;
  float: left;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const FormBox = styled.div`
  display: block;
  width: 65%;
  height: 1000px;
  float: right;
`;
const ButtonBox = styled.div`
  width: 419px;
  height: 63px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Form = styled.form`
  background-color: ${theme.color.whiteFont};
  border-radius: 40px;
  width: 70%;
  text-align: center;
  margin: 175px auto 175px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px 40px 40px 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & {
    height: 570px;
  }

  & > div {
    text-align: center;
  }
  & > div > span {
    display: inline-block;
    text-align: center;
    width: 65px;
    font-size: ${theme.font_size.h2};
    margin-right: 14px;
  }

  & > div > input {
    border-radius: 30px;
    border: none;
    height: 55px;
    margin-bottom: 58px;
    padding-left: 20px;
    font-size: ${theme.font_size.subtitle1};
    font-family: ${theme.font_family.T};
    outline: none;
    background: #f6f5f1;
    border: 1px solid ${theme.color.logoColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  & > div > input[name="id"] {
    width: 500px;
  }

  & > div > input[name="pw"] {
    width: 500px;
  }
  & > .btncontainer {
    display: flex;
    flex-direction: row;
  }
  & > .btncontainer > button {
    margin: 30px 75px 20px 75px;
  }
`;

const Title = styled.h1`
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 75px;
  font-family: ${theme.font_family.T};
  font-size: ${theme.font_size.h1};
  margin-left: auto;
  margin-right: auto;
`;
