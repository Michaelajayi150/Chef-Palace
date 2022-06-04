import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

export const Series = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;

  h3 {
    padding-bottom: 3px;
    border-bottom: 1px solid rgba(153, 153, 153, 0.5);
  }
`;

export const Mains = styled.div`
  width: 68%;

  img {
    max-height: 500px;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(205, 133, 63);
    text-align: center;
    width: 100%;
    padding: 15px;
    color: #fff;

    svg {
      color: rgb(255, 0, 0);
      margin-right: 10px;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

export const Aside = styled.div`
  width: 28%;
  justify-content: flex-end;
`;

export const Nutrients = styled.div`
  width: 50%;
`;

export const ItemsRules = styled.div`
  width: 45%;
`;

export const NutContent = styled.div`
  p {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      margin-left: auto;
      justify-self: flex-end;
    }

    span:last-child {
      margin-left: 13px;
    }
  }

  div {
    padding-left: 30px;
  }
`;

export const NutDetail = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.5);
`;
