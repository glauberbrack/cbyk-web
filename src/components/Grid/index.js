import React, { useCallback, useEffect, useState } from 'react';
import {
  FaPlane,
  FaSlash,
  FaCloud,
  FaSun,
} from 'react-icons/fa';

import { Container, Content, Header, HeaderBox} from './styles';

import api from '../../services/api';

function Grid({ rows, columns, airports: numAirports, clouds: numClouds }) {
  const [grid, setGrid] = useState([]);
  const [clouds, setClouds] = useState([]);
  const [airports, setAirports] = useState([]);
  const [cloudsAirports, setCloudsAirports] = useState([]);
  const [day, setDay] = useState(0);
  const [firstDayFound, setFirstDayFound] = useState(0);
  const [lastDayFound, setLastDayFound] = useState(0);


  const handleClearWeather = useCallback(() => {
    setGrid([]);
    setClouds([]);
    setAirports([]);
    setCloudsAirports([]);
    setDay(0);
    setFirstDayFound(0);
    setLastDayFound(0);

    api
      .get('/', {
        params: {
          airports: numAirports,
          clouds: numClouds,
          rows,
          columns,
        },
      })
      .then((response) => {
        const {
          grid: gridResponse,
          clouds: cloudsResponse,
          airports: airportsResponse,
          day: dayResponse,
        } = response.data;

        setGrid(gridResponse);
        setClouds(cloudsResponse);
        setAirports(airportsResponse);
        setDay(dayResponse);
      });
  }, [columns, numAirports, numClouds, rows]);

  useEffect(() => {
    handleClearWeather();
  }, [handleClearWeather]);

  useEffect(() => {
    const intVal = setInterval(() => {
      if (!lastDayFound) {
        api.get('/nextday').then((response) => {
          const {
            clouds: cloudsResponse,
            airports: airportsResponse,
            day: dayResponse,
            first_day_airport_cloud,
            last_day_airport_cloud,
            clouds_airports,
          } = response.data;

          setClouds(cloudsResponse);
          setAirports(airportsResponse);
          setDay(dayResponse);
          setFirstDayFound(first_day_airport_cloud);
          setLastDayFound(last_day_airport_cloud);
          setCloudsAirports(clouds_airports);
        });
      }
    }, 1000);

    return () => clearInterval(intVal);
  }, [lastDayFound]);

  return (
    <Container>
      <Header>
        <HeaderBox>
        <span>Dias até o primeiro aeroporto ser atingido</span>
        <h1>{firstDayFound}</h1>
        </HeaderBox>

        <HeaderBox>
        <span>Dias até todos os aeroportos serem atingidos</span>        
        <h1>{lastDayFound}</h1>
        </HeaderBox>

      </Header>

      <Content {...{ rows, columns }}>
        {grid.map((g) => (
          <li key={Math.random().toString(16).substring(2, 15)}>
              {!!cloudsAirports.find(
                (cap) => cap.x === g.x && cap.y === g.y
              ) ? (
                <FaSlash size={30} color="#E57878"/>
              ) : !!clouds.find((c) => c.x === g.x && c.y === g.y) ? (
                <FaCloud size={30} color="#082A44" />
              ) : !!airports.find((a) => a.x === g.x && a.y === g.y) ? (
                <FaPlane size={30} color="#009900" />
              ) : (
                <FaSun size={30} color="#ffd500" />
              )}
          </li>
        ))}
      </Content>
    </Container>
  );
}

export default Grid;
