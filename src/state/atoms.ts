// state.ts
import { atom } from 'recoil';

// Define an atom for tracking a counter
export const openedCardState = atom({
  key: 'openedCardState', // Unique ID (with respect to other atoms/selectors)
  default: 'all', // Default value of the atom
});

// Define an atom for tracking active patients
export const embeddedAnalyticsState = atom({
  key: 'embeddedAnalyticsState',
  default: true,
});
