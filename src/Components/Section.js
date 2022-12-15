import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftButton,
  rightButton,
  backgroundimg,
}) {
  return (
    <Wrap bgimg={backgroundimg}>
      <Fade bottom>
        <HEADER>
          <h1>{title}</h1>
          <p>{description}</p>
        </HEADER>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
          <DownArrow src="https://img.icons8.com/ios/50/FFFFFF/expand-arrow--v1.png" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: ${(props) => `url("../Images/${props.bgimg}")`};
`;

const HEADER = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  padding-bottom: 15vh;
  display: flex;
  justify-content: center;
  gap: 15px;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  color: #fff;
`;
const RightButton = styled(LeftButton)`
  background: #fff;
  opacity: 0.7;
  color: #000;
`;

const DownArrow = styled.img`
  height: 30px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
