import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { 
    Content, 
    Title, 
    SubTitle,
    Label,
    Input,
    Box,
} from './styles';

import Button from '../../components/Button';


function Home() {

    
    const [airports, setAirports] = useState(3);
    const [clouds, setClouds] = useState(4);
    const [rows, setRows] = useState(10);
    const [columns, setColumns] = useState(10);

    function handleChange(prop, event) {
        if (prop === 'airports') {
            setAirports(event.target.value);
        }
        if (prop === 'clouds') {
            setClouds(event.target.value);
        }
        if (prop === 'rows') {
            setRows(event.target.value);
        }
        if (prop === 'columns') {
            setColumns(event.target.value);
        }
    }

    function calculateStorm(){
        console.log(airports, clouds, rows, columns)
    }


    return (
        <><Container>
                <Row>
                    <Col sm={12}>
                        <Content>
                            <Row>
                                <Col sm={12}>
                                    <Title>CBYK Airports</Title>
                                    <SubTitle>Simule a previsão de nuvens sobre os aeroportos</SubTitle>
                                </Col>
                                <Col sm={3}>
                                    <Label>Aeroportos</Label>
                                    <Input min={3} placeholder={"3"} type={"number"} onChange={(e) => handleChange('minutes', e)} data-test="minutes-input"></Input>
                                </Col>
                                <Col sm={3}>
                                    <Label>Nuvens</Label>
                                    <Input min={3} placeholder={"4"} type={"number"} onChange={(e) => handleChange('minutes', e)} data-test="minutes-input"></Input>
                                </Col>
                                <Col sm={3}>
                                    <Label>Minutos:</Label>
                                    <Input min={3} placeholder={"10"} type={"number"} onChange={(e) => handleChange('minutes', e)} data-test="minutes-input"></Input>
                                    
                                </Col>
                                
                                <Col sm={3}>
                                    <Label>Plano:</Label>
                                    <Input min={3} placeholder={"10"} type={"number"} onChange={(e) => handleChange('minutes', e)} data-test="minutes-input"></Input>
                                </Col>
                                
                                <Col sm={12} className={"center"}>
                                    <Button 
                                        text="Simular"
                                        actionFunction={calculateStorm}
                                        data-test="simulate-button"
                                    />
                                </Col>
                                
                                
                            </Row>
                        </Content>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;
