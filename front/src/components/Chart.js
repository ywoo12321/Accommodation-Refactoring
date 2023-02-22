import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";
import LocationChart from "../components/LocationChart";
import ThemeChart from "../components/ThemeChart";
import LikeChart from "../components/LikeChart";
import axios from "axios";
import { useState, useEffect } from "react";

const Chart = id => {
  const [LocationInfo, setLocationInfo] = useState([]);
  const [ThemeInfo, setThemeInfo] = useState([]);
  const [RecordInfo, setRecordInfo] = useState([]);
  const fetchLocation = async () => {
    //LocationLog 정보 받아오기
    const response = await axios.get(
      `https://kaybe-wgkwk.run.goorm.io/mypage/chart/${id.children}`,
    );
    setLocationInfo(response.data.pie);
    setThemeInfo(response.data.rader);
    setRecordInfo(response.data.line);
  };
  useEffect(() => {
    fetchLocation();
  }, []);
  return (
    <ChartBox>
      <LocationChart>{LocationInfo}</LocationChart>
      <ThemeChart>{ThemeInfo}</ThemeChart>
      <LikeChart>{RecordInfo}</LikeChart>
    </ChartBox>
  );
};
export default Chart;
const ChartBox = styled.div`
  margin-left: 82px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 984px;
  height: 2100px;
  left: 82px;
  top: 765px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset 0px 6px 4px rgba(82, 79, 74, 0.25);
  border-radius: 40px;
`;
