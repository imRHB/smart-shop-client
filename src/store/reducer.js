import { combineReducers } from "redux";

import entitiesReducers from "./entities";

export default combineReducers({
  entities: entitiesReducers,
});
