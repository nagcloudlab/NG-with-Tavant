import "bootstrap/dist/css/bootstrap.css";

import { combineReducers, createStore } from "redux";

//---------------------------------------------------
// counter UI
//---------------------------------------------------

// step-1 : state => count

// step-2 : action(s) => increment , decrement

// step-3 : reducer(s) => counteReducer

function countReducer(state = {}, action) {
  // let type=action.type;
  //   let payload=action.type;
  let { type, payload } = action; // de-structuring
  //
  switch (type) {
    case "INCREMENT": {
      return { value: state.value + payload };
    }
    case "DECREMENT": {
      return { value: state.value - payload };
    }
    default:
      return state;
  }
}

// step-4 : root reducer

const rootReducer = combineReducers({
  count: countReducer,
});

// step-5 : create single store with rootReducer

const initialState = {
  count: {
    value: 10,
  },
//   items:itemsReducer,
//   cart:cartReducer
};

const store = createStore(rootReducer, initialState);

//-------------------------------------------------------------
// Display
//-------------------------------------------------------------

store.subscribe(() => {
  const state = store.getState();
  const count = state.count;
  console.log(count);
});

//-------------------------------------------------------------
// Counter
//-------------------------------------------------------------

setTimeout(() => {
  let action = { type: "INCREMENT", payload: 20 };
  store.dispatch(action);

  setTimeout(() => {
    let action = { type: "DECREMENT", payload: 30 };
    store.dispatch(action);
  }, 5000);
}, 5000);
