import styled from "@emotion/styled";
import theme from "../styles/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import active_heart_btn from "../images/active_heart_btn.png";
import disabled_heart_btn from "../images/disabled_heart_btn.png";
import account from "./userAccount";
import mock from "./lodgingMock";
import axios from "axios";

const id = account.id;
const LodgingDetail = () => {
  const location = useLocation();
  const lodging_id = location.state;
  console.log(lodging_id);
  const [lodgingDetailInfo, setLodgingDetailInfo] = useState([]); //서버로 받아오기
  const [isLike, setIsLike] = useState();
  const fetchLodgingDetail = async () => {
    const response = await axios.get(
      `https://kaybe-wgkwk.run.goorm.io/lodgings/${lodging_id}/${id}`,
    );
    setLodgingDetailInfo(response.data);
    setIsLike(response.data[0].lodging[0].like);
  };

  const toggleButton = async e => {
    isLike === true ? setIsLike(false) : setIsLike(true);
    const res = await axios.get(
      `https://kaybe-wgkwk.run.goorm.io/lodgings/like/${id}/${lodging_id}`,
    );
  };
  useEffect(() => {
    fetchLodgingDetail();
  }, []);

  return (
    <>
      <Navbar />
      {lodgingDetailInfo?.map(main => {
        const lodgingDetails = main.lodging[0];
        const sameLocation = main.samelocation;
        const sameTheme = main.sametheme;
        const lodgingLike = lodgingDetailInfo[0].lodging[0].like;

        return (
          <>
            <FirstBlock key={lodgingDetails.lodging_id}>
              <ImageBox>
                <LodgingImage src={lodgingDetails.img1} />
              </ImageBox>
              <TextBox>
                <Text>
                  숙소명 : {lodgingDetails.lodging_name}
                  <br />
                  <br />위 치 : {lodgingDetails.address}
                  <br />
                  <br />테 마 : # {lodgingDetails.tag}
                </Text>
                <HeartBtn isActiveHeartBtn={isLike} onClick={toggleButton} />
              </TextBox>
            </FirstBlock>
            <BoxNameBox>같은 테마의 숙소</BoxNameBox>
            <SecondBox>
              {sameTheme.map((same, idx) => {
                return (
                  <ImgBox key={same.lodging_id} first_img={idx === 0}>
                    <LodgingName key={same.lodging_id}>{same.lodging_name}</LodgingName>
                    <Link
                      to="/lodgingDetail/Log"
                      onClick={() => window.location.reload()}
                      state={same.lodging_id}
                    >
                      <SameLodgingImage src={same.lodging_img} alt={same.lodging_name} />
                    </Link>
                  </ImgBox>
                );
              })}
            </SecondBox>
            <BoxNameBox>근처 숙소</BoxNameBox>
            <ThirdBox>
              {sameLocation.map((same, idx) => {
                return (
                  <ImgBox key={same.lodging_id} first_img={idx === 0}>
                    <LodgingName key={same.lodging_id}>{same.lodging_name}</LodgingName>
                    <Link
                      to="/lodgingDetail/Log"
                      onClick={() => window.location.reload()}
                      state={same.lodging_id}
                    >
                      <SameLodgingImage src={same.lodging_img} alt={same.lodging_name} />
                    </Link>
                  </ImgBox>
                );
              })}
            </ThirdBox>
          </>
        );
      })}
      <Footer />
    </>
  );
};
export default LodgingDetail;

const HeartBtn = ({ isActiveHeartBtn, onClick }) => {
  return (
    <HeartButton>
      <HeartImage
        src={isActiveHeartBtn ? active_heart_btn : disabled_heart_btn}
        onClick={onClick}
        width={40}
        height={40}
      />
    </HeartButton>
  );
};
const FirstBlock = styled.div`
  width: 1675px;
  height: 290px;
  margin-top: 81px;
  margin-left: 161px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageBox = styled.div`
  width: 433px;
  height: 290px;
`;
const LodgingImage = styled.img`
  width: 433px;
  height: 290px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;
`;
const SameLodgingImage = styled.img`
  width: 337px;
  height: 225px;
  object-fit: cover;
  z-index: -10;
  cursor: pointer;
  &:hover {
    filter: brightness(0.4);
  }
`;
const TextBox = styled.div`
  width: 1166px;
  height: 290px;
  background: #ffffff;
  border: 1px solid #e4e3d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;
const Text = styled.div`
  margin-top: 33px;
  margin-left: 57px;
  line-height: 37px;
  font-family: ${theme.font_family.N};
  font-size: ${theme.font_size.h2};
`;

const HeartButton = styled.button`
  margin-left: 57px;
  margin-top: 15px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;
const HeartImage = styled.img`
  width: 40px;
  height: 40px;
`;
const SecondBox = styled.div`
  margin-top: 14px;
  width: 1920px;
  height: 268px;
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
const ThirdBox = styled.div`
  margin-top: 14px;
  margin-bottom: 64px;
  width: 1920px;
  height: 268px;
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
  margin-top: 32px;
  margin-left: 50px;
  margin-bottom: 14px;
  height: 32px;
  font-family: ${theme.font_family.B};
  font-size: ${theme.font_size.h3};
`;
