import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    margin: 10px;
    width: 150px;
    background: #35C8D2;
    background-blend-mode: overlay, normal;
    box-shadow: 0px 4px 1px #35C8D2;
    border-radius: 10px;
    padding: 10px 25px;
    outline: none!important;
    
    font-weight: 500;
    font-size: 16px;
    border: none;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.573158px;
    text-transform: uppercase;
    color: #fff;

    
  &:hover {
    background: ${shade(0.1, '#35C8D2')};
  }
`;
