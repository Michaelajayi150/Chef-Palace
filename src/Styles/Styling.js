import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const List = styled.div`
  position: relative;
  /* width: calc(50% - 600px); */
  margin: 6px auto;
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translateY(-60px);
  /* background-color: #fff; */
  z-index: 10;
  padding: 10px 30px;
  border-radius: 10px;
  /* box-shadow: 2px 4px 18px 20px rgb(0, 0, 0, 0.4); */
`;

export const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 90px;
  height: 90px;
  /* padding: 15px 15px; */
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  svg {
    color: #fff;
    font-size: 1rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }

  @media only screen and (min-width: 540px) {
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    margin-left: 1rem;

    h4 {
      color: #fff;
      font-size: 0.8rem;
    }

    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }
`;
