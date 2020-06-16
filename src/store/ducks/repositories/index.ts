import {Reducer} from 'redux';

import {RepositoriesState, RepositoriesTypes} from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.ADD_REQUEST:
      return {...state, loading: true};
    case RepositoriesTypes.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, action.payload.data],
      };
    case RepositoriesTypes.ADD_FAILURE: {
      return {...state, loading: false, error: true, data: []};
    }
    default:
      return state;
  }
};

export default reducer;
