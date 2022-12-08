import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import account from "../components/mock/userAccount";
import MainAdvertise from "../components/MainAdvertise";
import mock from "../components/mock/mock";

const id = account.id;
const nickName = account.nickName;
const MainPageLog = () => {
  const [mainPageInfo, setMainPageInfo] = useState([]); //서버로 받아오기
  const fetchMainPage = async () => {
    const response = await axios.get(
      `https://kaybe-wgkwk.run.goorm.io/lodgings/recommendation/${id}`,
    );
    await console.log(response.data);
    setMainPageInfo(response.data);
  };
  useEffect(() => {
    fetchMainPage();
  }, []);

  return (
    <>
      <Navbar />
      <MainAdvertise />
      {mainPageInfo.map(main => {
        console.log(main);
        return Object.keys(main).map(lodgings => {
          return (
            <div key={lodgings}>
              <BoxNameBox>{LIST_INFO[lodgings]}</BoxNameBox>
              <ListBox key={lodgings}>
                {Object.keys(main[lodgings]).map(lodging => {
                  return (
                    <ImgBox key={main[lodgings][lodging].lodging_id} first_img={lodging === "0"}>
                      <LodgingName>{main[lodgings][lodging].lodging_name}</LodgingName>
                      <Link to="/lodgingDetail/Log" state={main[lodgings][lodging].lodging_id}>
                        <LodgingImage
                          src={main[lodgings][lodging].lodging_img}
                          alt={main[lodgings][lodging].lodging_name}
                        />
                      </Link>
                    </ImgBox>
                  );
                })}
              </ListBox>
            </div>
          );
        });
      })}
      <Footer />
    </>
  );
};
const LIST_INFO = {
  0: `${nickName}님의 취향저격 숙소`,
  1: `${nickName}님의 선호 지역 숙소`,
  2: "#TOP10 인기숙소",
  3: "#모던한 감성 숙소",
  4: "#네츄럴한 감성 숙소",
  5: "#클래식한 감성 숙소",
  6: "#아시아 감성 숙소",
  7: "#프로방스 감성 숙소",
  8: "#인더스트리얼 감성 숙소",
  9: "#팝아트 감성 숙소",
};

const MainAdvertiseBox = styled.div`
  width: 1874px;
  height: 800px;
  margin-top: 33px;
  margin-left: 23px;
  margin-bottom: 80px;
  background-color: #d9d9d9;
`;
const LodgingName = styled.div`
  display: none;
  z-index: 99;
  position: absolute;
  font-family: ${theme.font_family.T};
  font-size: ${theme.font_size.h4};
  color: ${theme.color.whiteFont};
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
const BoxNameBox = styled.div`
  margin-left: 50px;
  margin-bottom: 14px;
  height: 32px;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h3};
`;
const LodgingImage = styled.img`
  width: 337px;
  height: 225px;
  object-fit: cover;
  z-index: -10;
  cursor: pointer;
  &:hover {
    filter: brightness(0.4);
  }
`;
const ImgBox = styled.div`
  width: 337px;
  height: 225px;
  position: relative;
  margin-right: 78px;
  margin-left: ${({ first_img }) => (first_img ? "130px" : "0px")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  overflow: hidden;
  & > .mainImg {
    position: relative;
    width: 337px;
    height: 225px;
    object-fit: cover;
  }
  &:hover {
    & > div {
      display: block;
    }
  }
`;

const ListBox = styled.div`
  margin-top: 14px;
  margin-bottom: 65px;
  width: 1920px;
  height: 269px;
  display: block-flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 4px #edece3, inset 0px 2px 4px #edece3;
  overflow: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const LastBox = styled.div`
  margin-top: 14px;
  margin-bottom: 97px;
  width: 1920px;
  height: 269px;
  display: block-flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 2px 4px #edece3, inset 0px 2px 4px #edece3;
  overflow: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default MainPageLog;
