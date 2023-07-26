import { configureStore } from '@reduxjs/toolkit';

import { rootApi } from './api/rootApi';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});

export default store;
