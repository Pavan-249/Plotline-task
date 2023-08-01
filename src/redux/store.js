import { createStore } from "redux";

let initialState = {
  values: {
    tooltipText: 'Dummy',
    textSize: 14,
    textColor: '#000000',
    // other properties...
  }
};

let rootReducer = (state = initialState, action) => {

  if (action.type === '@@redux/INIT') {
    return state; // Return the current state during initialization
  }

  switch (action.type) {
    
    case 'SET_VALUE':
      
    return {
        ...state,
        values: {
          ...state.values,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
export default store;
