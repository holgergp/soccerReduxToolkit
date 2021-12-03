import React from 'react';
import LeagueTable from './LeagueTable';
import { SAMPLE_LEAGUE_TABLE } from './SampleData';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('League Table should', () => {
  it('render 18 clubs', async () => {
    const initialPositionState = {
      positions: SAMPLE_LEAGUE_TABLE,
      loadingCompleted: true,
    };
    const store = mockStore({ leagueTable: initialPositionState });

    render(
      <Provider store={store}>
        <LeagueTable />
      </Provider>
    );
    await waitFor(() => screen.getByRole('heading'));

    expect(screen.getAllByRole('button')).toHaveLength(18);
  });
});
