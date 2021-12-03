import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Row, Container } from 'react-bootstrap';
import LeagueTable from './LeagueTable/LeagueTable';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="index">
      <Container>
        <Row>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <LeagueTable />
            </QueryClientProvider>
          </Provider>
        </Row>
      </Container>
    </div>
  );
};

export default App;
