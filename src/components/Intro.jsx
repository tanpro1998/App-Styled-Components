import React from "react";
import styled from "styled-components";
import Woman from "../images/woman.png";
import Animation from "./Animation";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  margin-top: 50px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width:480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: crimson;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, mollitia
          aliquam modi, facilis perferendis dolore aspernatur aperiam quasi,
          iure nemo fugiat.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone> Call Me (+84) 964903991</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Woman} />
      </Right>
      <Animation />
    </Container>
  );
};

export default Intro;
