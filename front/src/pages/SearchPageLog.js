import styled from "@emotion/styled";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import mock from "./searchMock";
import axios from "axios";

const SearchPageLog = () => {
  const searchText = useLocation();
  const text = searchText.state;
  const [searchInfo, setSearchInfo] = useState([]);
  const fetchSearchInfo = async () => {
    //     //SearchInfo 정보 받아오기
    const response = await axios.get(`https://kaybe-wgkwk.run.goorm.io/lodgings/search/${text}`);
    setSearchInfo(response.data);
  };
  useEffect(() => {
    fetchSearchInfo();
  }, []);
  //   const [searchInfo, setSearchInfo] = useState(mock);
  return (
    <>
      <Navbar />
      <BoxNameBox># {text} 숙소에 대한 검색 결과</BoxNameBox>
      <SearchImageBox>
        {searchInfo.map(search => {
          console.log(search);
          return (
            <ImgBox key={search.lodging_id}>
              <LodgingName>{search.lodging_name}</LodgingName>
              <Link to="/lodgingDetail/Log" state={search.lodging_id}>
                <LodgingImage src={search.lodging_img} alt={search.lodging_name} />
              </Link>
            </ImgBox>
          );
        })}
      </SearchImageBox>
      <Footer />
    </>
  );
};
export default SearchPageLog;

const BoxNameBox = styled.div`
  margin-top: 32px;
  margin-left: 50px;
  margin-bottom: 14px;
  height: 32px;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h3};
`;

const SearchImageBox = styled.div`
  width: 93%;
  margin: 0 auto;
  margin-top: 58px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1), inset 0px 8px 18px 8px rgba(82, 79, 74, 0.1);
  border-radius: 40px;
  &:hover {
    & > div {
      display: inline-block;
    }
  }
`;
const ImgBox = styled.div`
  display: inline-block;
  width: 337px;
  height: 225px;
  position: relative;
  margin-left: 26px;
  margin-right: 26px;
  margin-top: 45px;
  margin-bottom: 45px;
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
