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
  width: 40%;
  max-width: 400px;
  margin: 6px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  transform: translateY(-30px);
  background-color: #fff;
  z-index: 10;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 2px 4px 18px 20px rgb(0, 0, 0, 0.4);
`;
