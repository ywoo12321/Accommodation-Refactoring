import Navbar from "../components/Navbar";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Btn from "../components/Btn";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SelectPage = () => {
  const [locationInfo, setlocationInfo] = useState([]);
  const [clicked, setClicked] = useState([]);

  const handleClick = event => {
    const item = event.target;
    if (clicked.indexOf(item) !== -1) {
      clicked.splice(clicked.indexOf(item), 1);
      item.classList.remove("clicked");
      return;
    }
    if (clicked.length >= 5) {
      return;
    }
    console.log(clicked);
    item.classList.add("clicked");
    setClicked([...clicked, item]);
  };

  const fetchlocation = async () => {
    const response = await axios.get("https://kaybe-wgkwk.run.goorm.io/lodgings/random/");
    await console.log(response.data);
    setlocationInfo(response.data);
  };
  useEffect(() => {
    fetchlocation();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <SelectBox>
          <TextBox>
            <TitleName>
              당신의 취향을 골라보세요
              <TitleSmallName>(0~5개 선택 가능)</TitleSmallName>
            </TitleName>
          </TextBox>
          <ImgContainer>
            {Object.keys(locationInfo).map(lodging => {
              return (
                <ImgBox key={lodging} onClick={handleClick}>
                  <img src={locationInfo[lodging].src} alt={lodging.name} />
                </ImgBox>
              );
            })}
          </ImgContainer>
          <BtnBox>
            <Link to="/signup">
              <Btn>이전</Btn>
            </Link>
            <Link to="/mainPage">
              <Btn>완료</Btn>
            </Link>
          </BtnBox>
        </SelectBox>
      </Container>
    </>
  );
};

export default SelectPage;

const Container = styled.div`
  height: 2247px;
`;

const SelectBox = styled.div`
  width: 93%;
  height: 90%;
  margin: 0 auto;
  margin-top: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.1), inset 0px 8px 18px 8px rgba(82, 79, 74, 0.1);
  border-radius: 40px;
`;

const TitleName = styled.h1`
  font-family: ${theme.font_family.T};
  font-size: ${theme.font_size.h1};
  margin-left: 150px;
  opacity: 1;
  color: black;
`;

const TitleSmallName = styled.span`
  font-family: ${theme.font_family.B};
  padding-left: 20px;
  font-size: ${theme.font_size.subtitle1};
  line-height: 25px;
  color: red;
`;
const TextBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const ImgContainer = styled.div`
  height: 80%;
  padding-top: 14px;
  margin: 0 auto;
  text-align: center;
`;

const ImgBox = styled.div`
  display: inline-block;
  width: 361px;
  height: 241px;
  position: relative;
  margin-left: 26px;
  margin-right: 26px;
  margin-top: 45px;
  margin-bottom: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
  .clicked {
    border: 10px solid ${theme.color.footerColor};
    border-radius: 25px;
  }
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const BtnBox = styled.div`
  width: 395px;
  height: 63px;
  text-align: center;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  & > button {
    margin-left: 70px;
    margin-right: 70px;
  }
`;
