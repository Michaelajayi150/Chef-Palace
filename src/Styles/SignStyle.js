import styled from "styled-components";

export const LogContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;
export const LogBox = styled.div`
  width: 60%;
  min-width: 300px;
  min-height: 45rem;
  border-radius: 0.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 100;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
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
`;

export const LogAnimation = styled.div`
  position: absolute;
  z-index: 1001;
  left: 0;
  bottom: 0px;
  overflow: hidden;
  width: 1000px;
  height: 1000px;

  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgb(205, 133, 63);
    animation: ripple 15s infinite;
    /* box-shadow: 0 0 1px 0 #508fb9; */
  }

  .small {
    width: 200px;
    height: 200px;
    left: -100px;
    bottom: -100px;
  }

  .medium {
    width: 400px;
    height: 400px;
    left: -200px;
    bottom: -200px;
  }

  .large {
    width: 600px;
    height: 600px;
    left: -300px;
    bottom: -300px;
  }

  .xlarge {
    width: 800px;
    height: 800px;
    left: -400px;
    bottom: -400px;
  }

  .xxlarge {
    width: 1000px;
    height: 1000px;
    left: -500px;
    bottom: -500px;
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
