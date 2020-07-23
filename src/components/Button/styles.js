import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    margin: 10px;
    background: #5636D3;
    background-blend-mode: overlay, normal;
    box-shadow: 0px 4px 1px #5636D3;
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
    background: ${shade(0.1, '#5636D3')};
  }
`;
