import React, { useState } from "react";
import styled from "styled-components";
import How from "../images/how1.png";
import Card from "./Card";
import Play from "../images/play.png";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 150px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: crimson;
  padding: 15px;
  font-size: 20px;
  color: white;
  margin-top: 50px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30px;
  cursor: pointer;
`

const Service = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image open={open} src={How} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus quia et, suscipit iure obcaecati sint consequuntur
            magnam possimus id repudiandae a laboriosam reprehenderit commodi
            dolore porro iusto numquam impedit dolores!
          </Desc>
          <Cards>
            <Card />
            <Card />
            <Card />
          </Cards>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
