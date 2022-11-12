import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import MainAdvertise from "../components/MainAdvertise";
import mock from "./mock";

const id = "id1";
const MainPage = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const [mainPageInfo, setMainPageInfo] = useState([]); //서버로 받아오기
  const fetchMainPage = async () => {
    const response = await axios.get(`https://kaybe-wgkwk.run.goorm.io/lodgings/recommendation`);
    await console.log(Object.values(response.data[0]));
    setMainPageInfo(Object.values(response.data[0]));
  };
  useEffect(() => {
    fetchMainPage();
  }, []);

  return (
    <>
      <Navbar />
      <MainAdvertise />
      {mainPageInfo.map((main, idx) => {
        const lodgingData = Object.values(main);
        return (
          <div key={idx}>
            <BoxNameBox>{LIST_INFO[idx]}</BoxNameBox>
            <ListBox key={idx}>
              {lodgingData.map((lodging, idx) => {
                return (
                  <ImgBox key={idx} first_img={idx === 0}>
                    <LodgingName>{lodging.lodging_name}</LodgingName>
                    <Link to="/lodgingDetail" state={lodging.lodging_id}>
                      <LodgingImage src={lodging.lodging_img} alt={lodging.lodging_name} />
                    </Link>
                  </ImgBox>
                );
              })}
            </ListBox>
          </div>
        );
      })}
      ;
      <Footer />
    </>
  );
};
const LIST_INFO = {
  0: "#TOP10 인기숙소",
  1: "#모던한 감성 숙소",
  2: "#네츄럴한 감성 숙소",
  3: "#클래식한 감성 숙소",
  4: "#아시아 감성 숙소",
  5: "#프로방스 감성 숙소",
  6: "#인더스트리얼 감성 숙소",
  7: "#팝아트 감성 숙소",
};

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
const BoxNameBox = styled.div`
  margin-left: 50px;
  margin-bottom: 14px;
  height: 32px;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h3};
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
export default MainPage;
