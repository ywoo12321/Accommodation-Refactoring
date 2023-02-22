import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LikeLodging from "../components/LikeLodging";
import Recommend from "../components/Recommend";
import account from "../components/mock/userAccount";
import Chart from "../components/Chart";
import UpLoad from "../components/UpLoad";

const nick = account.nickName;
const id = account.id;
const MyPage = () => {
  return (
    <>
      <Navbar />
      <BoxNameBox>{nick} 님의 찜 리스트</BoxNameBox>
      <LikeLodging />
      <FavoriteBox>
        <LeftBox>
          <BoxNameBox>{nick} 님의 취향 분석 레포트</BoxNameBox>
          <Chart>{id}</Chart>
        </LeftBox>
        <RightBox>
          <BoxNameBox>{nick} 님과 같은 취향 유저가 찜한 숙소</BoxNameBox>
          <Recommend />
          <BoxNameBox>당신의 취향을 분석해 드려요</BoxNameBox>
          <UpLoad />
        </RightBox>
      </FavoriteBox>
      <Footer />
    </>
  );
};

const BoxNameBox = styled.div`
  margin-top: 115px;
  margin-left: 80px;
  margin-bottom: 14px;
  height: 32px;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h3};
`;
const FavoriteBox = styled.div`
  width: 1743px;
  display: flex;
  justify-content: space-between;
`;
const LeftBox = styled.div`
  width: 984px; ;
`;
const RightBox = styled.div`
  width: 688px;
`;
export default MyPage;
