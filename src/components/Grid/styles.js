import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  padding: 0 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  > span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid #35C8D2;

    height: 100px;
    width: 300px;

    span {
        font-family: 'Poppins';
        font-size: 12px;
        color: #000;
    }

    h1 {
        margin-top: 10px;
        font-family: 'Poppins';
        font-size: 25px;
        font-weight: 500;
        color: #000;
    }
`;


export const Content = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 20px;

  padding: 10px;

  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};

  max-width: 1120px;
  width: 100%;
  max-height: 800px;
  height: 100%;
  margin: 0 auto;
  border-radius: 5px;

  border: 1px solid #F3F3F3;

  svg {
    padding: 5px;
    border: 2px solid #F3F3F3;
    border-radius: 5px;
  }
`;
