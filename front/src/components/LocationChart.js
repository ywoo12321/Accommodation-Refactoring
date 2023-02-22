import styled from "@emotion/styled";
import ReactApexChart from "react-apexcharts";
import theme from "../styles/emotionTheme";

const LocationChart = props => {
  const themeData = Object.values(props.children);
  const chartData = {
    series: themeData,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [
        "강원",
        "부산",
        "서울",
        "전라",
        "제주",
        "경기",
        "경상",
        "광주",
        "울산",
        "인천",
        "충청",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <BoxNameBox>당신의 선호 지역을 알려드릴게요</BoxNameBox>
      <ChartBox>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={550}
        />
      </ChartBox>
    </>
  );
};
export default LocationChart;
const BoxNameBox = styled.div`
  margin-top: 100px;
  margin-bottom: 14px;
  width: 600px;
  height: 60px;
  border: 1px solid #e4e3d7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  font-family: ${theme.font_family.T};
  font-size: ${theme.font_size.h1};
`;
const ChartBox = styled.div`
  margin-top: 80px;
  height: 411px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
