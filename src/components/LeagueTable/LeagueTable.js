import React, { useEffect } from 'react';
import Position from '../Position/Position';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSampleData } from './leagueTableSlice';

const LeagueTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSampleData());
  }, [dispatch]);

  const positions = useSelector((state) => state.leagueTable.positions);
  const loadingCompleted = useSelector(
    (state) => state.leagueTable.loadingCompleted
  );

  if (!loadingCompleted) {
    return 'Loading...';
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Col md={6}>
        <Card bg="dark">
          <Card.Header role={'heading'}>
            <Card.Title>Ligatabelle zum Selberstecken</Card.Title>
          </Card.Header>
          <Card.Body>
            {positions.map((team, index) => (
              <Position team={team} rank={index + 1} key={index} />
            ))}
          </Card.Body>
        </Card>
      </Col>
    </DndProvider>
  );
};

export default LeagueTable;
