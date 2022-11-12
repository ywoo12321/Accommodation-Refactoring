import styled from "@emotion/styled";
import theme from "../styles/theme";
const lodgingCard = lodgingInfo => {
  return (
    <cardBox>
      <img src={lodgingInfo.image} width="337" height="235" alt="MainImg" />
    </cardBox>
  );
};
export default lodgingCard;

const cardBox = styled.button`
  width: 337px;
  height: 235px;
`;
