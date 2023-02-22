import { useState } from "react";
import styled from "@emotion/styled";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
import theme from "../styles/emotionTheme";

const advertisingTest = [banner1, banner2, banner3];

const MainAdvertise = () => {
  const [curIndex, setCurIndex] = useState(0);
  return (
    <SectionWidthControlBox>
      <ViewBox>
        <AdvertiseImage src={advertisingTest[curIndex]} alt="bannerImage" />
        {advertisingTest.length > 1 ? (
          <BtnBox>
            {advertisingTest.map((src, i) => {
              return (
                <Btn
                  key={i}
                  type="button"
                  onClick={() => setCurIndex(i)}
                  isActive={curIndex === i}
                />
              );
            })}
          </BtnBox>
        ) : null}
      </ViewBox>
    </SectionWidthControlBox>
  );
};
const SectionWidthControlBox = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1874px;
  height: 800px;
  margin: 0 auto;
  margin-top: 19px;
  margin-bottom: 30px;
`;
const AdvertiseImage = styled.img`
  width: 1874px;
  height: 800px;
`;

const ViewBox = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: #d9d9d9;
`;

const BtnBox = styled.div`
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  gap: 20px;
`;

const Btn = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  background-color: ${({ isActive }) => (isActive ? "#FFFFFF" : "rgba(0, 0, 0, 0.4)")};
  cursor: pointer;
`;

export default MainAdvertise;
