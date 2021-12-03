import { configureStore } from '@reduxjs/toolkit';
import leagueTableReducer from './LeagueTable/leagueTableSlice';
import createSagaMiddleware from 'redux-saga';
import saga from '../components/LeagueTable/leagueTableSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    leagueTable: leagueTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(saga);
