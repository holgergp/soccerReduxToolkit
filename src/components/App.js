import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Container } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <Provider store={store}>
            <LeagueTable />
          </Provider>
        </Row>
      </Container>
    </div>
  );
};

export default App;
