const reducer = (state, action) => {
  switch (action.type) {
    case "example":
      return {
        ...state,
        greeting: "Hi",
      };

    case "add_value":
      return {
        ...state,
        value: action.payload || 0,
      };

    default:
      return state;
  }
};

const initialState = { name: "Chris" };

const store = createStore(reducer, initialState);

store.subscribe(() => console.log("Algo ha cambiado"), store.getState());

store.dispatch({ type: "example" });
