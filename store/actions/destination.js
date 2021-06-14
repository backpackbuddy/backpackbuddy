import { DESTINATION } from './actionTypes';

export const destination = (destination) => ({
  type: DESTINATION,
  destination,
  lastUpdate: new Date(),
});
