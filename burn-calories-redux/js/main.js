// Constants
const BURN_CALORIES = "BURN_CALORIES";
const FINGER_BURN_CALORIES = 1.42;

// Helpers
const formatToNumber = (num) => Number(num.toFixed(2));
const checkIsPositive = (num) => (num > 0 ? num : 0);
const burnCaloriesMessage = (value, food) =>
  value > 0
    ? `Te falta quemar ${value} calorías de la ${food}`
    : `Has quemado todas las calorías de la ${food}`;

const reducer = (state, action) => {
  switch (action.type) {
    case BURN_CALORIES: {
      const { burnValue, totalBurnClicks, pizzaCalories, sodaCalories } = state;

      const burnPlusValue = formatToNumber(burnValue + action.payload);
      const pizzaValue = formatToNumber(pizzaCalories - action.payload);
      const sodaValue = formatToNumber(sodaCalories - action.payload);

      return {
        ...state,
        totalBurnClicks: totalBurnClicks - 1,
        pizzaCalories: checkIsPositive(pizzaValue),
        sodaCalories: checkIsPositive(sodaValue),
        burnValue: burnPlusValue,
      };
    }

    default:
      return state;
  }
};

const initialState = {
  burnValue: 0,
  totalBurnClicks: 1360563,
  pizzaCalories: 1835 * 1000,
  sodaCalories: 97 * 1000,
};

const store = createStore(reducer, initialState);

const printCalories = () => {
  const {
    totalBurnClicks,
    pizzaCalories,
    sodaCalories,
    burnValue,
  } = store.getState();

  window[
    "total-burn-clicks"
  ].textContent = `Te faltan ${totalBurnClicks} clicks`;
  window["pizza-calories"].textContent = burnCaloriesMessage(
    pizzaCalories,
    "pizza"
  );
  window["soda-calories"].textContent = burnCaloriesMessage(
    sodaCalories,
    "Coca Cola"
  );
  window.result.textContent = `Has quemado ${burnValue} calorías`;
};

printCalories();

store.subscribe(printCalories);

const handleBurnCalories = () =>
  store.dispatch({ type: BURN_CALORIES, payload: FINGER_BURN_CALORIES });

window.burn.addEventListener("click", handleBurnCalories);
