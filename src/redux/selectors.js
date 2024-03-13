import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectNameFilter = state => state.filters.name;

export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (users, inputFilter) => {
    return users.filter(user =>
      user.name.toLowerCase().includes(inputFilter.toLowerCase()),
    );
  },
);
