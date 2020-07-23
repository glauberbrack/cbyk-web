import React from 'react';

import { Container } from './styles';

const Button = (props) => (
    <Container onClick={() => props.actionFunction()}>
        {props.text}
    </Container>
);

export default Button;