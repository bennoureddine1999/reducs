import { createStore } from "redux";
import Reducstest from "../reducer/reducer";

const stor = createStore(
  Reducstest,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
export default stor;
