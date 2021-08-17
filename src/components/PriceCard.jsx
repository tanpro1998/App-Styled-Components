import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  margin-right: 100px;
  -webkit-box-shadow: -4px 1px 11px 7px rgba(0, 0, 0, 0.64);
  box-shadow: -4px 1px 11px 7px rgba(0, 0, 0, 0.64);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media only screen and (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;

  }
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: bold;

  @media only screen and (max-width: 480px) {
   font-size: 30px;

  }
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid crimson;
  border-radius: 10px;
  color: crimson;
  background-color: white;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;

    @media only screen and (max-width: 480px) {
    margin: 10px;
    font-size: 12px;

  }
`;
const Button = styled.button`
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: crimson;
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
    font-size: 12px;
    padding: 5px;

  }
`;
const PriceCard = ({price, type}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>500 Point Free</ListItem>
        <ListItem>Perfect Support</ListItem>
        <ListItem>More Than Templates </ListItem>
        <ListItem>Premium Account</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
