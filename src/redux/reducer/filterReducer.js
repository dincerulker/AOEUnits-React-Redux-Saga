/**
 * Summary:
 * 
 * Here, the filtering of the data from the json file has been determined.
 * In cost filtering, filtering is done according to cost type and cost properties.
 * Finally, the filtered table is setted.
 * 
 */

import data from "../../unitsdata/age-of-empires-units.json";

const initialConditions = { checked: false, value: [0, 200] }

const initialState = {
    units: data.units,
    filterOutput: null,
    age: "All",
    wood: initialConditions,
    food: initialConditions,
    gold: initialConditions,
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "AGE": {
        return {
          ...state,
          age: action.payload,
        };
      }
      case "COST": {
        if (action.payload.checked === true || action.payload.checked === false) {
          return {
            ...state,
            [action.payload.costName]: {
              checked: action.payload.checked,
              value: state[action.payload.costName].value,
            },
          };
        } else if (action.payload.value) {
          return {
            ...state,
            [action.payload.costName]: {
              checked: state[action.payload.costName].checked,
              value: action.payload.value,
            },
          };
        }
        break;
      }
  
      case "SET_FILTERED":
        return {
          ...state,
          filterOutput: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default filterReducer;