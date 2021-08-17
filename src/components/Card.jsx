import React from "react";
import styled from "styled-components";
import Search from "../images/search.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100px;
  -webkit-box-shadow: -4px 1px 11px 7px rgba(0, 0, 0, 0.64);
  box-shadow: -4px 1px 11px 7px rgba(0, 0, 0, 0.64);

  @media only screen and (max-width:480px) {
    width: 50px;
  }
`;

const Image = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Text = styled.span`
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width:480px) {
    font-size: 14px;
  }
`;

const Card = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
    </Container>
  );
};

export default Card;
