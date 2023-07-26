import { combineReducers } from '@reduxjs/toolkit';

import { rootApi } from './api/rootApi';

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
});

export default rootReducer;
