import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";

const Btn = ({ children, onclick }) => {
  return <Button onClick={onclick}>{children}</Button>;
};

export default Btn;

const Button = styled.button`
  width: 163px;
  height: 63px;
  background: ${theme.color.whiteFont};
  border: none;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h4};
  line-height: 30px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: center;

  :hover {
    color: ${theme.color.logoColor};
    border: 3px solid ${theme.color.logoColor};
  }
`;
