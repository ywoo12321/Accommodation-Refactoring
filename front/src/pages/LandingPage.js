import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";
import { Box, Typography, Container } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <WhiteBox>
        <BigImageBox>
          <img src={Landing1} width="100%" height="100%" alt="Landing1" />
        </BigImageBox>
        <RightBox>
          <RightTextBox>
            <LargeText {...animatedItemUp1} fontWeight="bold">
              나만의
              <br />
              감성숙소를 찾아주다
            </LargeText>
            <SmallButton {...animatedItemUp2}>
              <Link to="/mainPage" style={{ color: "inherit", textDecoration: "inherit" }}>
                둘러보기
              </Link>
            </SmallButton>
          </RightTextBox>
        </RightBox>
      </WhiteBox>
      <YellowBox>
        <SecondLeftBox>
          <SecondTextBox>
            <LargeText {...animatedItemUp3}>
              전국의
              <br /> 모든 감성숙소를
              <br /> 한눈에
            </LargeText>
            <SmallText {...animatedItemUp4}>찾아보기 힘들었던 감성숙소들을 모아놨어요.</SmallText>
          </SecondTextBox>
        </SecondLeftBox>
        <SecondImageContainer>
          <SecondImageBox>
            <img src={Landing2} width="100%" height="100%" alt="Landing2" {...animatedItemLeft3} />
          </SecondImageBox>
          <SecondImageBox>
            <img src={Landing3} width="100%" height="100%" alt="Landing3" {...animatedItemLeft4} />
          </SecondImageBox>
          <SecondImageBox>
            <img src={Landing4} width="100%" height="100%" alt="Landing4" {...animatedItemLeft5} />
          </SecondImageBox>
          <SecondImageBox>
            <img src={Landing5} width="100%" height="100%" alt="Landing5" {...animatedItemLeft6} />
          </SecondImageBox>
        </SecondImageContainer>
      </YellowBox>
      <WhiteBox>
        <BigImageBox>
          <img src={Landing6} width="100%" height="100%" alt="Landing6" />
        </BigImageBox>
        <RightBox>
          <RightTextBox>
            <LargeText {...animatedItemUp5} fontWeight="bold">
              당신의
              <br /> 취향을 찾아주는 곳
            </LargeText>
            <SmallText {...animatedItemUp6}>
              여러가지 태그의 숙소들을 보며
              <br /> 여러분의 취향을 알아가봐요
            </SmallText>
          </RightTextBox>
        </RightBox>
      </WhiteBox>
      <ForthYellowBox>
        <ForthImageContainer>
          <ForthImageBox>
            <img src={Landing7} width="30%" height="100%" alt="Landing7" {...animatedItemDown1} />
            <img src={Landing8} width="30%" height="100%" alt="Landing8" {...animatedItemDown2} />
            <img src={Landing9} width="30%" height="100%" alt="Landing9" {...animatedItemDown3} />
          </ForthImageBox>
        </ForthImageContainer>
        <ForthBottomBox>
          <ForthTextBox>
            <LargeText {...animatedItemLeft1}>당신의 발견을 기다리고 있어요</LargeText>
            <SmallText {...animatedItemLeft2}>
              숲속에 숨겨진 감성부터
              <br /> 바다옆에 놓인 감성까지
            </SmallText>
          </ForthTextBox>
        </ForthBottomBox>
      </ForthYellowBox>
      <LastBox {...animatedItemUp7}>
        <LastTextBox>
          <SmallButton>
            <Link to="/mainPage" style={{ color: "inherit", textDecoration: "inherit" }}>
              지금 바로 취향 찾으러 가기
            </Link>
          </SmallButton>
        </LastTextBox>
      </LastBox>
      <Footer />
    </Box>
  );
};

export default LandingPage;

const WhiteBox = styled(Box)`
  width: 100vw;
  display: block;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-between;
`;
const YellowBox = styled(Box)`
  width: 100vw;
  display: block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.color.point};
`;
const ForthYellowBox = styled(Box)`
  width: 100vw;
  height: 56.25vw;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.color.point};
`;
const LastBox = styled(Box)`
  width: 100vw;
  height: 20.26vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BigImageBox = styled(Box)`
  width: 45vw;
  height: 56.25vw;
`;
const RightBox = styled(Box)`
  height: 56.25vw;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: right;
`;
const RightTextBox = styled(Box)`
  width: 41.67vw;
  height: 14.58vw;
  margin-top: 34vw;
  margin-right: 4vw;
  margin-bottom: 0px;
  text-align: right;
`;
const SecondLeftBox = styled(Box)`
  width: 31.4vw;
  height: 56.25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SecondTextBox = styled(Box)`
  width: 100%;
  height: 16vw;
  margin-left: 4vw;
  text-align: left;
`;
const SecondImageContainer = styled(Container)`
  width: 60vw;
  height: 36.92vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-top: 11vw;
  justify-content: space-between;
`;
const SecondImageBox = styled(Box)`
  width: 25vw;
  height: 17.6vw;
`;
const ForthImageContainer = styled(Box)`
  width: 100vw;
  height: 19.16vw;
  margin-top: 5vw;
  display: block;
  display: flex;
  justify-content: center;
`;
const ForthImageBox = styled(Box)`
  width: 92.86vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const ForthBottomBox = styled(Box)`
  width: 100vw;
  height: 10.67vw;
  display: flex;
  margin-top: 5.5vw;
  flex-direction: column;
  align-items: center;
`;
const ForthTextBox = styled(Box)`
  width: 59.32vw;
  height: 10.67vw;
  text-align: center;
`;
const LastTextBox = styled(Box)`
  width: 442;
  height: 50;
  text-align: baseline;
`;

const LargeText = styled(Typography)`
  font-weight: bold;
  color: black;
  font-size: 2.8rem;
  @media screen and (max-width: 430px) {
    font-size: ${theme.font_size.body1};
  }
`;

const SmallText = styled(Typography)`
  font-weight: regular;
  color: gray;
  font-size: ${theme.font_size.h5};
  @media screen and (max-width: 430px) {
    font-size: 0.3rem;
  }
`;
const SmallButton = styled(Typography)`
  font-weight: regular;
  color: gray;
  cursor: pointer;
  font-size: ${theme.font_size.h5};
  @media screen and (max-width: 430px) {
    font-size: 0.7rem;
  }
`;
