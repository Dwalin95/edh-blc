import { UnknownAction, combineReducers } from '@reduxjs/toolkit';

import { api } from '../../services/api';



const reducers = combineReducers({
  [api.reducerPath]: api.reducer,

  
});

const rootReducer = (state: ReturnType<typeof reducers> | undefined, action: UnknownAction) => {
  return reducers(state, action);
};

export default rootReducer;
