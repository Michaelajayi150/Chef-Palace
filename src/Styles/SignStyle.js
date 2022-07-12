import styled, { css } from "styled-components";

export const breakpoint = (values = []) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `@media screen and (min-width: ${screenBreakpoint}px) {
      width: ${cssPropBreakpoint}px;
      height: ${cssPropBreakpoint}px;
      left: ${-cssPropBreakpoint / 2}px;
      bottom: ${-cssPropBreakpoint / 2}px;
    }`);
  }, "");

  return css([breakpointProps]);
};

export const LogContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

export const LogBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 100;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);

  .close {
    position: absolute;
    z-index: 1100;
    cursor: pointer;
    top: 10px;
    right: 20px;
  }

  form {
    position: relative;
    width: 100%;
    z-index: 1100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 80%;
      max-width: 520px;
      padding: 10px 30px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #000;
      margin: 10px auto;

      &:focus {
        border-bottom: 1px solid rgb(205, 133, 63);
      }
    }
  }

  p {
    position: relative;
    z-index: 1100;
  }

  @media only screen and (min-width: 441px) {
    max-height: 35rem;
    border-radius: 0.5rem;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
    max-height: 45rem;
  }
`;

export const LogAnimation = styled.div`
  position: absolute;
  z-index: 1001;
  left: 0;
  bottom: 0px;
  overflow: hidden;
  width: 1000px;
  height: 1000px;
  border-radius: 0.5rem;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgb(205, 133, 63);
    animation: ripple 15s infinite;
    /* box-shadow: 0 0 1px 0 #508fb9; */
  }

  .small {
    width: 80px;
    height: 80px;
    left: -40px;
    bottom: -40px;
    ${breakpoint([{ 450: 120 }, { 768: 50 }, { 800: 100 }, { 1200: 200 }])}
  }

  .medium {
    width: 160px;
    height: 160px;
    left: -80px;
    bottom: -80px;

    ${breakpoint([{ 450: 240 }, { 768: 100 }, { 800: 200 }, { 1200: 400 }])}
  }

  .large {
    width: 240px;
    height: 240px;
    left: -120px;
    bottom: -120px;

    ${breakpoint([{ 450: 360 }, { 768: 150 }, { 800: 300 }, { 1200: 600 }])}
  }

  .xlarge {
    width: 320px;
    height: 320px;
    left: -160px;
    bottom: -160px;

    ${breakpoint([{ 450: 480 }, { 768: 200 }, { 800: 400 }, { 1200: 800 }])}
  }

  .xxlarge {
    width: 400px;
    height: 400px;
    left: -200px;
    bottom: -200px;

    ${breakpoint([{ 450: 600 }, { 768: 250 }, { 800: 500 }, { 1200: 1000 }])}
  }

  .shade1 {
    opacity: 0.2;
  }
  .shade2 {
    opacity: 0.5;
  }
  .shade2 {
    opacity: 0.7;
  }
  .shade4 {
    opacity: 0.8;
  }
  .shade5 {
    opacity: 0.9;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

export const NavLinks = styled.a`
  position: relative;
  z-index: 1100;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #892074;
  }
`;
