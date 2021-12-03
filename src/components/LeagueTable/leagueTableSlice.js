import { createSlice } from '@reduxjs/toolkit';
import { SAMPLE_LEAGUE_TABLE } from './SampleData';
import {
  recalculatePositionsWithRenamedTeam,
  recalculateSwappedPositions,
} from './Positions';

const initialState = {
  positions: SAMPLE_LEAGUE_TABLE,
  loadingCompleted: false,
};

export const leagueTableSlice = createSlice({
  name: 'leagueTable',
  initialState,
  reducers: {
    swapPositions: (state, action) => {
      console.log('state', state.positions);
      state.positions = recalculateSwappedPositions(
        action.payload.sourceTeamId,
        action.payload.targetTeamId,
        state.positions
      );
    },
    updateTeamname: (state, action) => {
      state.positions = recalculatePositionsWithRenamedTeam(
        action.payload.team,
        action.payload.updatedText,
        state.positions
      );
    },
    fetchSampleData: (state) => {
      state.loadingCompleted = false;
    },
    fetchSampleDataSuccess: (state, action) => {
      state.loadingCompleted = true;
      state.positions = action.payload;
    },
    fetchSampleDataError: (state) => {
      state.loadingCompleted = true;
      state.positions = SAMPLE_LEAGUE_TABLE;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  swapPositions,
  updateTeamname,
  fetchSampleData,
  fetchSampleDataSuccess,
  fetchSampleDataError,
} = leagueTableSlice.actions;

export default leagueTableSlice.reducer;
