import { configureStore } from '@reduxjs/toolkit';
import leagueTableReducer from './LeagueTable/leagueTableSlice';

export const store = configureStore({
  reducer: {
    leagueTable: leagueTableReducer,
  },
});
