import React from "react";
import styled from "styled-components";
import main from "../assets/main.jpg";
import firstGraphic from "../assets/firstIcon.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import cakeSlider1 from "../assets/cakeSlider1.jpg";
import cakeSlider2 from "../assets/cakeSlider2.jpg";
import cakeSlider3 from "../assets/cakeSlider3.jpg";
import cakeSlider4 from "../assets/cakeSlider4.jpg";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Main = styled.img`
  width: 100%;
  transition: 0.3s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: -1;
`;

const Graphic = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Textbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0px 20px;
`;

const Img = styled.img`
  width: 60%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 17px;
  line-height: 1.6;
`;

const TextboxSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0px 20px;
  background-color: #fff7ef;
  font-family: "Black Han Sans";
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30%;
  height: 30px;
  font-size: 15px;
  border: 2px solid #533d4a;
  border-radius: 10px;
  transition: 0.1s ease-in-out;

  font-weight: 600;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.74);
`;

export default () => (
  <Container>
    <Section>
      <Main src={main} alt="content"></Main>
    </Section>
    <Div>
      <Graphic>
        <Img src={firstGraphic} alt="graphic"></Img>
      </Graphic>
      <Textbox>
        <Title>About 세컨드브리즈</Title>
        <Content>
          비건 베이커리 카페 세컨드브리즈입니다. 세컨드브리즈는 동물성 재료를
          일체 사용하지 않고 핸드메이드 베이킹을 하고 있습니다. 동물성 식재료에
          알러지가 있거나, 유당 불내증, 글루텐 불내증을 않고 계신 분들 뿐만
          아니라, 좀 더 건강하고 가벼운 디저트를 원하시는 분들이 맘껏 드실 수
          있는 비건 & 글루텐프리 & 알러지프리 디저트를 직접 생산,
          연구개발합니다.
        </Content>
      </Textbox>
    </Div>
    <Div>
      <Graphic>
        <AwesomeSlider>
          <div data-src={slider1} />
          <div data-src={slider2} />
          <div data-src={slider3} />
          <div data-src={slider4} />
        </AwesomeSlider>
      </Graphic>
      <TextboxSlider>
        <Title>비건 디저트</Title>
        <Content>아무 내용이나 적기</Content>
      </TextboxSlider>
    </Div>
    <Div>
      <TextboxSlider>
        <Title>비건 케이크</Title>
        <Content>아무 내용이나 적기</Content>
        <SLink to="https://forms.gle/R6HowwzpiLVqL7tx7">케이크 주문하기</SLink>
      </TextboxSlider>
      <Graphic>
        <AwesomeSlider>
          <div data-src={cakeSlider1} />
          <div data-src={cakeSlider2} />
          <div data-src={cakeSlider3} />
          <div data-src={cakeSlider4} />
        </AwesomeSlider>
      </Graphic>
    </Div>
  </Container>
);
