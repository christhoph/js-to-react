const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};

  const getState = () => state;
  const dispatch = (action) => {
    const newState = reducer(state, action);
    state = newState;
    updater();
  };
  const subscribe = (listener) => (updater = listener);

  return {
    getState,
    dispatch,
    subscribe,
  };
};
