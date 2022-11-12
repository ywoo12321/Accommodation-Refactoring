import styled from "@emotion/styled";
import theme from "../styles/theme";
import ReactApexChart from "react-apexcharts";

const LikeChart = props => {
  console.log(Object.values(props.children));
  const state = {
    series: [
      {
        name: "모던",
        data: Object.values(props.children)[0],
      },
      {
        name: "네츄럴",
        data: Object.values(props.children)[1],
      },
      {
        name: "아시아",
        data: Object.values(props.children)[2],
      },
      {
        name: "클래식",
        data: Object.values(props.children)[3],
      },
      {
        name: "프로방스",
        data: Object.values(props.children)[4],
      },
      {
        name: "인더스트리얼",
        data: Object.values(props.children)[5],
      },
      {
        name: "팝아트",
        data: Object.values(props.children)[6],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jun", "Jul", "Aug", "Sep"],
        labels: {
          show: true,
          style: {
            colors: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
            fontSize: "13px",
            fontFamily: `${theme.font_family.T}`,
          },
        },
      },
    },
  };

  return (
    <>
      <BoxNameBox>당신의 월별 선호 변화를 알려드릴게요</BoxNameBox>
      <ChartBox>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          width={650}
          height={350}
        />
      </ChartBox>
    </>
  );
};
export default LikeChart;
const BoxNameBox = styled.div`
  margin-top: 115px;
  margin-bottom: 14px;
  width: 694px;
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
