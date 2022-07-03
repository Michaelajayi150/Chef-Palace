import styled from "styled-components";
import { css } from "styled-components";
import * as IoIcons from "react-icons/io5";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSection = styled.div`
  height: 90vh;
  max-height: 800px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  max-width: 1600px;
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 50px;
  display: flex;
  z-index: 10;
`;
export const Arrows = css`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background-color: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
      background: #cd853f;
      transform: scale(1.05);
    }
  }
`;

export const PrevArrow = styled(IoIcons.IoArrowBack)`
  ${Arrows}
`;
export const NextArrow = styled(IoIcons.IoArrowForward)`
  ${Arrows}
`;
