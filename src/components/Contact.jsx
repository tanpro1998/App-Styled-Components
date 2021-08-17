import React from "react";
import styled from "styled-components";
import Map from "../images/map.png";
import Phone from "../images/phone.png";
import Send from "../images/send.png";
import Footer from "./Footer";

const Container = styled.div`
  height: 90%;
  background: url("https://asanzo.vn/wp-content/uploads/2017/08/contact-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  margin-left: 200px;

  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  outline: none;

  @media only screen and (max-width: 480px) {
   padding: 5px;
   margin-top: 5px;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 50%;

  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  @media only screen and (max-width: 480px) {
   padding: 5px;
   margin-top: 20px;
  }
`;
const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: crimson;
  color: white;
  font-size: 20px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
   margin-top: 5px;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
   width: 100%;
   margin-top: 20px;
  }
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px) {
   margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 40px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
   width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 480px) {
   font-size: 14px;
  }
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Do you want join?
            <br />
            Let's start now!
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Submit</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <Address>
            <Icon src={Map} />
            <Text>Binh Hung, Binh Chanh, Ho Chi Minh City</Text>
          </Address>
          <Address>
            <Icon src={Phone} />
            <Text>+84 964903991</Text>
          </Address>{" "}
          <Address>
            <Icon src={Send} />
            <Text>davidtanpro1998@gmail.com</Text>
          </Address>
        </AddressContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;
