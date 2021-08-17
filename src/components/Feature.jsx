import React from "react";
import styled from "styled-components";
import Phone from "../images/app.png";
import Animation from "./Animation";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width:480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width:480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width:480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;

  @media only screen and (max-width:480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: gray;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Phone} />
      </Left>
      <Right>
        <Title>
          <b>Perfect </b>
          <span style={{ color: "crimson" }}>Design</span>
          <br />
          <b>Good </b> <span style={{ color: "tomato" }}>Business</span> <br />
        </Title>
        <SubTitle>
          We know that perfect design means good business.
          <br />
        </SubTitle>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          laborum quis nulla error eveniet odit neque perspiciatis incidunt
          voluptas fugit ullam esse hic culpa sed quibusdam libero a, beatae
          aut!
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <Animation />
    </Container>
  );
};

export default Feature;
