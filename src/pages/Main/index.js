import React, { useState } from 'react';
import { FaPlane } from 'react-icons/fa'
import { Container, Row, Col} from 'react-bootstrap';
import { 
    Content, 
    Title, 
    SubTitle,
    Label,
    Input,
} from './styles';

import Button from '../../components/Button';
import Grid from '../../components/Grid';


function Home() {
    const [airports, setAirports] = useState(3);
    const [clouds, setClouds] = useState(4);
    const [rows, setRows] = useState(10);
    const [columns, setColumns] = useState(10);

    const [showGrid, setShowGrid] = useState(false);

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
        setShowGrid(true)
    }

    function calculateAnother(){
        setShowGrid(false)
    }


    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Content>
                        {!showGrid ? (
                            <Row>
                            <Col sm={12}>
                                <Title>CBYK Airports <FaPlane size={40}/></Title>
                                <SubTitle>Simule a previsão de nuvens sobre os aeroportos</SubTitle>
                            </Col>
                            <Col sm={3}>
                                <Label>Aeroportos</Label>
                                <Input min={3} defaultValue={3} placeholder={"3"} type={"number"} onChange={(e) => handleChange('airports', e)} data-test="minutes-input"></Input>
                            </Col>
                            <Col sm={3}>
                                <Label>Nuvens</Label>
                                <Input min={4} placeholder={"4"} type={"number"} onChange={(e) => handleChange('clouds', e)} data-test="minutes-input"></Input>
                            </Col>
                            <Col sm={3}>
                                <Label>Linhas:</Label>
                                <Input min={10} placeholder={"10"} type={"number"} onChange={(e) => handleChange('rows', e)} data-test="minutes-input"></Input>
                                
                            </Col>
                            
                            <Col sm={3}>
                                <Label>Colunas:</Label>
                                <Input min={10} placeholder={"10"} type={"number"} onChange={(e) => handleChange('columns', e)} data-test="minutes-input"></Input>
                            </Col>
                            
                            <Col sm={12} className={"center"}>
                                <Button 
                                    text="Simular"
                                    actionFunction={calculateStorm}
                                    data-test="simulate-button"
                                />
                            </Col>
                        </Row>

                        ) : (
                            <>
                            <Grid {...{ rows, columns, airports, clouds }} />
                            <Col sm={12} className={"center"}>
                                <Button 
                                    text="Nova Simulação"
                                    actionFunction={calculateAnother}
                                    data-test="simulate-button"
                                />
                            </Col>
                            </>
                            )
                            }
                    </Content>
                </Col>
            </Row>

        </Container>

    );
}

export default Home;
