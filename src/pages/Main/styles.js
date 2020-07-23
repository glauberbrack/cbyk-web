import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    padding: 100px;
    margin: 40px 0px;
    background: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 5px;

    @media (max-width: 992px) {
        padding: 50px;
    }

    .center {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }
`;

export const Title = styled.h1`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 52px;
    line-height: 46px;
    letter-spacing: -0.375px;
    color: #3B3B3B;
    text-align: center;

    svg {
        margin-left: 10px;
    }
`;

export const SubTitle = styled.p`
    font-family: 'Poppins';
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.375px;
    color: #3B3B3B;
    text-align: center;
`;

export const Label = styled.label`
    font-family: 'Poppins';
    width: 100%;
    color: #FF872C;
    font-weight: 600;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    font-family: 'Poppins';
    line-height: 20px;
    color: #484848;
    background-color: #fff;
    width: 100%;
    padding: 10px 10px 9px;
    border-bottom: 2px solid transparent;
    margin-bottom: 15px;
    font-size: 16px;
    border: ${
        props => props.error === true
        ? "2px solid red"
        : "2px solid #ced4da" 
    };
    border-radius: .25rem;
    transition: 0.3s;
    position: relative;
    :focus {
        border-bottom: 3px solid #FF872C;
        transition: 0.3s;
    }
`;


export const BlankMessage = styled.p`
    position: absolute;
    color: red;
    font-size: 11px;
    bottom: -20px;

`;