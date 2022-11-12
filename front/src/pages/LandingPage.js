import styled from "@emotion/styled";
import theme from "../styles/theme";
import useScrollFadeIn from "../components/useScrollFadeIn";
import { Link } from "react-router-dom";
import Landing1 from "../images/Landing1.png";
import Landing2 from "../images/Landing2.png";
import Landing3 from "../images/Landing3.png";
import Landing4 from "../images/Landing4.png";
import Landing5 from "../images/Landing5.png";
import Landing6 from "../images/Landing6.png";
import Landing7 from "../images/Landing7.png";
import Landing8 from "../images/Landing8.png";
import Landing9 from "../images/Landing9.png";
import Landing10 from "../images/Landing10.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const animatedItemDown1 = useScrollFadeIn("down", "1", "0");
  const animatedItemDown2 = useScrollFadeIn("down", "1", "0.5");
  const animatedItemDown3 = useScrollFadeIn("down", "1", "0.7");
  const animatedItemUp1 = useScrollFadeIn("up", "1", "0");
  const animatedItemUp2 = useScrollFadeIn("up", "1", "0.2");
  const animatedItemUp3 = useScrollFadeIn("up", "1", "0");
  const animatedItemUp4 = useScrollFadeIn("up", "1", "0.2");
  const animatedItemUp5 = useScrollFadeIn("up", "1", "0");
  const animatedItemUp6 = useScrollFadeIn("up", "1", "0.2");
  const animatedItemUp7 = useScrollFadeIn("up", "2", "0.2");
  const animatedItemLeft1 = useScrollFadeIn("left", "1", "0");
  const animatedItemLeft2 = useScrollFadeIn("left", "1", "0.2");
  const animatedItemLeft3 = useScrollFadeIn("left", "1", "0");
  const animatedItemLeft4 = useScrollFadeIn("left", "1", "0.1");
  const animatedItemLeft5 = useScrollFadeIn("left", "1", "0.2");
  const animatedItemLeft6 = useScrollFadeIn("left", "1", "0.3");

  return (
    <>
      <WhiteBox>
        <BigImageBox>
          <img src={Landing1} width="864" height="1080" alt="Landing1" />
        </BigImageBox>
        <RightBox>
          <RightTextBox>
            <p className="bold" {...animatedItemUp1}>
              나만의
              <br />
              감성숙소를 찾아주다
            </p>

            <p className="btn" {...animatedItemUp2}>
              <Link to="/mainPage" style={{ color: "inherit", textDecoration: "inherit" }}>
                둘러보기
              </Link>
            </p>
          </RightTextBox>
        </RightBox>
      </WhiteBox>
      <YellowBox>
        <SecondLeftBox>
          <SecondTextBox>
            <p className="bold" {...animatedItemUp3}>
              전국의
              <br /> 모든 감성숙소를
              <br /> 한눈에
            </p>
            <p className="normal" {...animatedItemUp4}>
              찾아보기 힘들었던 감성숙소들을 모아놨어요.
            </p>
          </SecondTextBox>
        </SecondLeftBox>
        <SecondImageContainer>
          <img src={Landing2} width="507" height="338" alt="Landing2" {...animatedItemLeft3} />
          <img src={Landing3} width="507" height="338" alt="Landing3" {...animatedItemLeft4} />
          <img src={Landing4} width="507" height="338" alt="Landing4" {...animatedItemLeft5} />
          <img src={Landing5} width="507" height="338" alt="Landing5" {...animatedItemLeft6} />
        </SecondImageContainer>
      </YellowBox>
      <WhiteBox>
        <BigImageBox>
          <img src={Landing6} width="864" height="1080" alt="Landing6" />
        </BigImageBox>
        <RightBox>
          <RightTextBox>
            <p className="bold" {...animatedItemUp5}>
              당신의
              <br /> 취향을 찾아주는 곳
            </p>
            <p className="normal" {...animatedItemUp6}>
              여러가지 태그의 숙소들을 보며
              <br /> 여러분의 취향을 알아가봐요
            </p>
          </RightTextBox>
        </RightBox>
      </WhiteBox>
      <ForthYellowBox>
        <ForthImageContainer>
          <ForthImageBox>
            <img src={Landing7} width="549" height="367" alt="Landing7" {...animatedItemDown1} />
            <img src={Landing8} width="549" height="367" alt="Landing8" {...animatedItemDown2} />
            <img src={Landing9} width="549" height="367" alt="Landing9" {...animatedItemDown3} />
          </ForthImageBox>
        </ForthImageContainer>
        <ForthBottomBox>
          <ForthTextBox>
            <p className="bold" {...animatedItemLeft1}>
              당신의 발견을 기다리고 있어요
            </p>
            <p className="normal" {...animatedItemLeft2}>
              숲속에 숨겨진 감성부터
              <br /> 바다옆에 놓인 감성까지
            </p>
          </ForthTextBox>
        </ForthBottomBox>
      </ForthYellowBox>
      <LastBox {...animatedItemUp7}>
        <LastTextBox>
          <p>
            <Link to="/mainPage" style={{ color: "inherit", textDecoration: "inherit" }}>
              지금 바로 취향 찾으러 가기
            </Link>
          </p>
        </LastTextBox>
        <Link to="/mainPage" style={{ color: "inherit", textDecoration: "inherit" }}>
          <img src={Landing10} width="144" height="167" alt="Landing10" />
        </Link>
      </LastBox>
      <Footer />
    </>
  );
};

export default LandingPage;

const WhiteBox = styled.div`
  width: 1920px;
  height: 1080px;
  display: block;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-between;
`;
const YellowBox = styled.div`
  width: 1920px;
  height: 1080px;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.color.point};
`;
const ForthYellowBox = styled.div`
  width: 1920px;
  height: 1080px;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.point};
`;
const LastBox = styled.div`
  width: 1920px;
  height: 389px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BigImageBox = styled.div`
  width: 864px;
  height: 100vh;
`;
const RightBox = styled.div`
  display: block;
  display: flex;
  flex-direction: column;
  //   align-items: right;
  justify-content: right;
`;
const RightTextBox = styled.div`
  width: 800px;
  height: 280px;
  margin-top: 654px;
  margin-right: 76px;
  margin-bottom: 0px;
  text-align: right;
  & > .bold {
    margin: 0px;
    font-family: ${theme.font_family.T};
    font-size: ${theme.font_size.tittle};
    color: ${theme.color.main};
  }
  & > .normal {
    margin-top: 20px;
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.h2};
    color: ${theme.color.gray};
  }
  & > .btn {
    margin-top: 20px;
    margin-left: 687px;
    cursor: pointer;
    width: 115px;
    height: 32px;
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.h2};
    color: ${theme.color.gray};
  }
`;
const SecondLeftBox = styled.div`
  width: 603px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SecondTextBox = styled.div`
  width: 603px;
  height: 397px;
  margin-left: 76px;
  text-align: left;
  & > .bold {
    margin: 0px;
    font-family: ${theme.font_family.T};
    font-size: ${theme.font_size.tittle};
    color: ${theme.color.main};
  }
  & > .normal {
    margin-top: 20px;
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.h2};
    color: ${theme.color.gray};
  }
`;
const SecondImageContainer = styled.div`
  width: 1037px;
  height: 709px;
  display: block;
  margin-top: 186px;
  justify-content: space-between;
`;
const ForthImageContainer = styled.div`
  width: 1920px;
  height: 368px;
  margin-top: 288px;
  display: block;
  display: flex;
  justify-content: center;
`;
const ForthImageBox = styled.div`
  width: 1783px;
  height: 368px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const ForthBottomBox = styled.div`
  width: 1920px;
  height: 205px;
  display: flex;
  margin-top: 106px;
  flex-direction: column;
  align-items: center;
`;
const ForthTextBox = styled.div`
  width: 1139px;
  height: 205px;
  text-align: center;
  & > .bold {
    margin: 0px;
    font-family: ${theme.font_family.T};
    font-size: ${theme.font_size.tittle};
    color: ${theme.color.main};
  }
  & > .normal {
    margin-top: 20px;
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.h2};
    color: ${theme.color.gray};
  }
`;
const LastTextBox = styled.div`
  width: 442;
  height: 50;
  text-align: baseline;
  & > p {
    font-family: ${theme.font_family.T};
    font-size: ${theme.font_size.h1};
    color: ${theme.color.main};
  }
`;
