import React from 'react';
import Position from '../Position/Position';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const LeagueTable = () => {
  //const [positions, setPositions] = useState(SAMPLE_LEAGUE_TABLE);
  const positions = useSelector((state) => state.leagueTable.positions);
  /**
  const { isLoading, error } = useQuery('sampleData', getSampleData, {
    onSuccess: setPositions,
  });
  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'An error has occurred: ' + error.message;
  }**/

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
