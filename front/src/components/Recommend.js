import styled from "@emotion/styled";
import theme from "../styles/theme";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Recommend = () => {
  const [recommendLodging, setRecommendLodging] = useState([]);
  const fetchRecommendLodging = async () => {
    const response = await axios.get(
      `https://kaybe-wgkwk.run.goorm.io/accounts/recommendation/admin`,
    );
    //
    await console.log(Object.values(response.data[0]));
    setRecommendLodging(Object.values(response.data[0]));
  };
  useEffect(() => {
    fetchRecommendLodging();
  }, []);

  return (
    <RecommendBox>
      {recommendLodging.map((lodging, idx) => {
        return (
          <>
            <ImgBox key={idx} first_img={idx === 0}>
              <LodgingName>{lodging.lodging_name}</LodgingName>
              <Link to="/lodgingDetail/Log" state={lodging.lodging_id}>
                <LodgingImage src={lodging.img} alt={lodging.lodging_name} />
              </Link>
            </ImgBox>
            <SimilarNickName>{lodging.user_nickname}님이 찜한 숙소</SimilarNickName>
          </>
        );
      })}
    </RecommendBox>
  );
};
export default Recommend;

const RecommendBox = styled.div`
  margin-left: 82px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 688px;
  height: 1090px;
  left: 82px;
  top: 765px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset 0px 6px 4px rgba(82, 79, 74, 0.25);
  border-radius: 40px;
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
const SimilarNickName = styled.div`
  margin-top: 20px;
  font-family: ${theme.font_family.T};
  font-size: ${theme.font_size.h4};
  color: ${theme.color.main};
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
  margin-top: 80px;
  position: relative;
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
