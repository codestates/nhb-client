import { combineReducers } from 'redux';
import getInfo, { Welcome } from './getInfo';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default combineReducers({
  getInfo,
});

export type RootState = { getInfo: Welcome };
