import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;

  @media only screen and (max-width:480px) {
    display: none;
  }
`;
const ListItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>FL@SH</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Pricing</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
