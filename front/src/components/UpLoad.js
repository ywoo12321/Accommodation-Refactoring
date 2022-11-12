import styled from "@emotion/styled";
import theme from "../styles/theme";
import axios from "axios";
import upLoad from "../images/upLoad.png";
import { useState, useEffect } from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import sibal from "../images/banner2.png";

const UpLoad = () => {
  const [fileInfo, setFileInfo] = useState(null);
  const [fakeDataIndex, setFakeDataIndex] = useState(0);
  const [fakeData, setFakeData] = useState([
    "당신이 원하는 숙소/n어떤 TYPE인지 알고싶나요?",
    "이 숙소는 modern : 72.8% 입니다.",
    "이 숙소는 natural : 92.3% 입니다.",
    "이 숙소는 natural : 92.3% 입니다.",
    "이 숙소는 provence : 92.3% 입니다.",
  ]);
  const sleep = ms => {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  };
  const GoAnalysis = async e => {
    sleep(6000);
    fakeDataIndex >= 4 ? setFakeDataIndex(1) : setFakeDataIndex(fakeDataIndex + 1);
    console.log(fakeDataIndex);
    // form2.append("image", fileInfo);
    // const res = await axios.post("https://kaybe-wgkwk.run.goorm.io/mypage/image", {}, form2, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  };

  return (
    <RecommendBox>
      <InputBox>
        {fileInfo === null ? <img src={upLoad} alt="FileInput" /> : false}
        {fileInfo === null ? (
          <p>
            Drag and Drop File Here to Upload <br />
            Or
          </p>
        ) : (
          false
        )}
        {fileInfo === null ? false : <UploadedImg src={fileInfo} alt="실패" />}
        <label htmlFor="file">Select File to Upload</label>
        <Input
          type="file"
          id="file"
          onChange={e => {
            console.log(e.target.files[0]);

            setFileInfo(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </InputBox>

      {fakeData[fakeDataIndex].split("/n").map((line, idx) => {
        return (
          <ExplainText key={idx}>
            {line}
            <br />
          </ExplainText>
        );
      })}

      <BtnBox>
        <Btn onclick={GoAnalysis}>분석하기</Btn>
      </BtnBox>
    </RecommendBox>
  );
};
export default UpLoad;
const RecommendBox = styled.div`
  margin-left: 82px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 688px;
  height: 765px;
  left: 82px;
  top: 765px;
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25), inset 0px 6px 4px rgba(82, 79, 74, 0.25);
  border-radius: 40px;
`;
const InputBox = styled.div`
  width: 494px;
  height: 440px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
  border-radius: 20px;
  border: none;
  background: rgba(217, 217, 217, 0.3);

  & > img[alt="FileInput"] {
    display: block;
    padding-top: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  & > p {
    text-align: center;
    margin-top: 22px;
    font-size: ${theme.font_size.h4};
    font-family: ${theme.font_family.N};
  }
  & > label {
    display: block;
    width: 226px;
    margin-top: 16px;
    text-align: center;
    padding: 6px 25px;
    background-color: ${theme.color.navColor};
    border-radius: 4px;
    border: 1.5px solid ${theme.color.gray};
    color: white;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Input = styled.input`
  display: none;
  margin: 0 auto;
`;

const UploadedImg = styled.img`
  width: 432px;
  height: 263px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  object-fit: cover;
`;
const ExplainText = styled.div`
  margin-top: 90px;
  line-height: 0px;
  font-family: ${theme.font_family.N};
  font-size: ${theme.font_size.h2};
  text-align: center;
`;
const BtnBox = styled.div`
  padding-top: 60px;
  padding-bottom: 201px;
  text-align: center;
  & > button {
    margin: 10px 75px 20px 75px;
  }
`;
