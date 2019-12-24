import { combineReducers } from "redux";
import error from './error/error'
import notifications from "./notifications/notifications";

export default combineReducers({
  error,
  notifications
})