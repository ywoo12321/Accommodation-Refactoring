import styled from "@emotion/styled";
import ReactApexChart from "react-apexcharts";
import theme from "../styles/emotionTheme";

const ThemeChart = props => {
  // console.log(props.children);

  const themeData = Object.values(props.children);
  const chartData = {
    series: [
      {
        name: "Series 1",
        data: themeData,
      },
    ],
    options: {
      chart: {
        height: 550,
        type: "radar",
      },
      colors: [`${theme.color.footerColor}`],
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColor: `${theme.color.footerColor}`,
        strokeWidth: 2,
      },
      xaxis: {
        categories: ["모던", "네츄럴", "아시아", "클래식", "프로방스", "인더스트리얼", "팝아트"],
        labels: {
          show: true,
          style: {
            colors: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
            fontSize: "20px",
            fontFamily: `${theme.font_family.T}`,
          },
        },
      },
    },
  };
  return (
    <>
      <BoxNameBox>당신이 선호한 취향 TYPE 알려드릴게요</BoxNameBox>
      <ChartBox>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="radar"
          width={900}
        />
      </ChartBox>
    </>
  );
};
export default ThemeChart;

const BoxNameBox = styled.div`
  margin-top: 115px;
  margin-bottom: 14px;
  width: 700px;
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
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
