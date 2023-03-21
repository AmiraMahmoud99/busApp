import { combineReducers } from 'redux';
 import { AuthReducer as auth } from './auth/index';
 

export const makeRootReducer = () => {
  return combineReducers({
     auth
   });
};

export default makeRootReducer;
