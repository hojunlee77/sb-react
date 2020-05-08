import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => (props.current ? "#dab555" : "#333333")};
  transition: color 0.5s ease-in-out;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/about"}>
        <SLink to="/about">About Us</SLink>
      </Item>
    </List>
  </Header>
));
