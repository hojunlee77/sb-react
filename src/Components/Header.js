import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "./Header.module.css";
import logo from "../assets/logo.jpg";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.74);
  background-color: white;
  padding-bottom: 5px;
  z-index: 100;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ItemIcon = styled.li`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: "#333333";
  transition: 0.2s ease-in-out;
  :hover {
    opacity: 0.5;
  }
`;

const ItemLogo = styled.li`
  display: flex;
  align-items: center;
  width: 30%;
`;

const Img = styled.img`
  width: 100%;
  max-height: 75px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <ItemLogo>
        <a href="/">
          <Img src={logo} alt="logo"></Img>
        </a>
      </ItemLogo>
      <ItemIcon>
        <a href="https://www.instagram.com/secondbreeze_vegan/">
          <i class="xi-instagram xi-2x"></i>
        </a>
      </ItemIcon>
    </List>
  </Header>
));
