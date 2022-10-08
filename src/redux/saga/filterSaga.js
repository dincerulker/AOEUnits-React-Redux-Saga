import { put, all, select, takeLatest, delay } from "redux-saga/effects";


/**
 * Filtering operations according to the selections are defined here.
 * 
 */


function* filter() {
  const state = yield select();
  let filtered_units = state.units;

 
  const filterCost = (resourceName) => {
    const resource = resourceName.toLowerCase();
    return filtered_units.filter((unit) => {
        return (
          unit.cost &&
          unit.cost[resourceName] >= state[resource].value[0] &&
          unit.cost[resourceName] <= state[resource].value[1]
        );
    });
  }

  if (state.age !== "All") {
    filtered_units = filtered_units.filter((unit) => unit.age === state.age);
  }
  if (state.wood.checked) {
    filtered_units = filterCost("Wood");
  }
  if (state.food.checked) {
    filtered_units = filterCost("Food");
  }
  if (state.gold.checked) {
    filtered_units = filterCost("Gold");
  }
  yield put({ type: "SET_FILTERED", payload: filtered_units });
}

/**
 * Summary
 * 
 * Here, before the filtering features from the reducer are transmitted to the store,
 * yield operations are performed to complete the necessary actions.
 * 
 * Delay added after selection to allow time for query to load.
 * 
 */

function* ageFilter(action) {
  yield delay(400);
  yield put({ type: "AGE", payload: action.payload });
  yield put({ type: "FILTER" });
}

function* costFilter(action) {
  yield put({ type: "COST", payload: action.payload });
  yield delay(500);
  yield put({ type: "FILTER" });
}

export default function* rootSaga() {
  yield all([
    yield takeLatest("AGE_FILTER", ageFilter),
    yield takeLatest("COST_FILTER", costFilter),
    yield takeLatest("FILTER", filter),
  ]);
}