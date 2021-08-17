import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Css = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Shape = styled.div`
  ${Css}
  clip-path: polygon(100% 0%, 60% 0%, 47% 100%, 100% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Css}
  clip-path: polygon(0% 0%, 47% 0%, 40% 100%, 0% 100%);
  background-color: tomato;
`;

const ServiceShape = styled.div`
  ${Css}
  clip-path: polygon(0% 0%, 30% 0%, 30% 100%, 0% 100%);
  background-color: purple;
  opacity: 0.5;
`;

const PriceShape = styled.div`
  ${Css}
  clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 70% 100%);
  background-color: red;
  opacity: 0.5;
`;

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <Shape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default App;
