import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return;
};

export default Footer;

const FooterBox = styled(Box)`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${theme.color.footerColor};
`;

const FooterTypo = styled(Typography)`
  color: ${theme.color.whiteFont};
  font-family: ${theme.font_family.N};
  font-size: ${theme.font_size.body2};
  @media screen and (max-width: 430px) {
    font-size: 6px;
  }
`;
