import styled from "@emotion/styled";
import theme from "../styles/emotionTheme";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.png";
import searchicon from "../images/searchicon.png";

const Navbar = () => {
  let searchData;
  const [search, setSearch] = useState();
  const [getData, setGetData] = useState("");
  const location = useLocation();

  const onchange = e => {
    setSearch(e.target.value);
    setGetData(search);
  };
  useEffect(() => {}, [location]);
  const reloadPage = e => {
    if (
      window.location.pathname === "/searchPage" ||
      window.location.pathname === "/searchPage/Log"
    ) {
      window.location.reload();
    }
  };

  return (
    <NavBox>
      <div className="navbar">
        <Link
          to={window.location.pathname.split("/").pop() === "Log" ? "/mainPage/Log" : "/mainPage"}
          className="logolink"
        >
          <img src={logo} width={111} height={60} alt="logo" />
        </Link>
        <SearchBox>
          <SearchInput
            type="text"
            id="search"
            value={search}
            placeholder="모던, 경기, 충청 등 원하는 검색어를 입력하세요."
            onChange={onchange}
          />
          <SearchImageBox>
            <Link
              to={
                window.location.pathname.split("/").pop() === "Log"
                  ? "/searchPage/Log"
                  : "/searchPage"
              }
              onClick={reloadPage}
              state={getData}
            >
              <img src={searchicon} width={40} height={40} alt="searchicon" />
            </Link>
          </SearchImageBox>
        </SearchBox>
        <ul style={{ float: "right" }}>
          {window.location.pathname.split("/").pop() === "Log" ? (
            <li style={{ float: "left" }}>
              <Link to="/mainPage">
                <button className="btn" type="button">
                  Log-out
                </button>
              </Link>
            </li>
          ) : (
            <li style={{ float: "left" }}>
              <Link to="/login">
                <button className="btn" type="button">
                  Log-in
                </button>
              </Link>
            </li>
          )}

          {window.location.pathname.split("/").pop() === "Log" ? (
            <li style={{ float: "left" }}>
              <Link to="/myPage/Log">
                <button className="btn" type="button">
                  My Page
                </button>
              </Link>
            </li>
          ) : (
            <li style={{ float: "left" }}>
              <Link to="/signup">
                <button className="btn" type="button">
                  Sign-up
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </NavBox>
  );
};

export default Navbar;

const NavBox = styled.nav`
  & > .navbar > .searchbox {
    float: left;
    text-align: center;
    width: 530px;
    height: 60px;
    margin-left: 520px;
    margin-top: 10px;
    padding-right: 20px;
    border-radius: 40px;
    border: 2px solid ${theme.color.navColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  & > div > .searchbox > input {
    display: inline;
    width: 92%;
    height: 50%;
    border: none;
    outline: none;
    margin-top: 14px;
    color: ${theme.color.main};
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.h4};
  }
  & > div > .searchbox > input::placeholder {
    color: ${theme.color.gray};
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.body1};
  }
  & > div > .searchbox > img {
    position: absolute;
    width: 30px;
    margin-top: 12px;
  }
  & > div > .logolink > img {
    float: left;
    display: flex;
    margin-top: 5px;
    height: 60px;
    width: 120px;
    cursor: pointer;
  }
  & > div > p > span {
    color: ${theme.color.logoPointColor};
  }
  & > div {
    width: 1876px;
    height: 80px;
    margin: auto;
    border-bottom: 3px solid ${theme.color.navColor};
  }
  & > div > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .btn {
    line-height: 78px;
    float: right;
    margin-left: 40px;
    border: none;
    color: ${theme.color.navColor};
    font-family: ${theme.font_family.T};
    font-size: ${theme.font_size.h5};
    cursor: pointer;
  }
  .btn:hover {
    color: ${theme.color.logoColor};
  }
  @media screen and (max-width: 768px) {
    .btn {
      margin-left: 6px;
      margin-right: 7px;
      font-size: ${theme.font_size.body1};
    }
    & > div > p {
      font-size: ${theme.font_size.subtitle1};
      line-height: 130%;
    }
  }

  #toggle {
    & > input[type="checkbox"] {
      height: 0;
      width: 0;
      visibility: hidden;
    }

    & > label {
      cursor: pointer;
      text-indent: -9999px;
      width: 100px;
      height: 50px;
      background: ${theme.color.navColor};
      display: block;
      border-radius: 100px;
      position: relative;
    }

    & > label:after {
      content: "";
      position: absolute;
      top: 2.5px;
      left: 2.5px;
      width: 45px;
      height: 45px;
      background: ${theme.color.whiteFont};
      border-radius: 90px;
      transition: 0.3s;
    }

    & > input:checked + label {
      background: ${theme.color.logoColor};
    }

    & > input:checked + label:after {
      left: calc(100% - 2.5px);
      transform: translateX(-100%);
    }

    & > label:active:after {
      width: 65px;
    }
  }
`;
const SearchBox = styled.div`
  float: left;
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 530px;
  height: 60px;
  margin-left: 520px;
  margin-top: 10px;
  border-radius: 40px;
  border: 2px solid ${theme.color.navColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const SearchInput = styled.input`
  display: inline;
  width: 85%;
  height: 50%;
  border: none;
  outline: none;
  margin-left: 20px;
  margin-top: 14px;
  color: ${theme.color.main};
  font-family: ${theme.font_family.N};
  font-size: ${theme.font_size.h4};
  ::placeholder {
    color: ${theme.color.gray};
    font-family: ${theme.font_family.N};
    font-size: ${theme.font_size.body1};
  }
`;

const SearchImageBox = styled.div`
  width: 30px;
  margin-top: 8px;
`;
