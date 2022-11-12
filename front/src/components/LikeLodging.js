import styled from "@emotion/styled";
import theme from "../styles/theme";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import account from "../pages/userAccount";

const id = account.id;
console.log(1);
const LikeLodging = () => {
  const [lodgingLikeKey, setLodgingLikeKey] = useState([]);
  const [lodgingLikeInfo, setLodgingLikeInfo] = useState([]); //서버로 받아오기
  const [isLike, setIsLike] = useState();
  //   const [lodgingLikeInfo, setLodgingLikeInfo] = useState(mock); //목으로 받아오기
  //   console.log(lodgingLikeInfo);
  const fetchLodgingLike = async () => {
    //     //LodgingLike 정보 받아오기
    const response = await axios.get(`https://kaybe-wgkwk.run.goorm.io/mypage/like/${id}`);
    setLodgingLikeInfo(Object.values(response.data.like));
    setLodgingLikeKey(Object.keys(response.data.like));
  };

  useEffect(() => {
    fetchLodgingLike();
  }, []);

  return (
    <ListBox>
      {lodgingLikeInfo.map((lodging, idx) => {
        return (
          <ImgBox key={idx} first_img={idx === 0}>
            <LodgingName>{lodging.name}</LodgingName>
            <Link to="/lodgingDetail/Log" state={lodgingLikeKey[idx]}>
              <LodgingImage src={lodging.img} alt={lodging.name} />
            </Link>
          </ImgBox>
        );
      })}
    </ListBox>
  );
};
export default LikeLodging;

const ListBox = styled.div`
  margin-top: 14px;
  margin-left: 82px;
  width: 1760px;
  height: 268px;
  display: block-flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e3d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
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
  margin-left: ${({ first_img }) => (first_img ? "72px" : "0px")};
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
