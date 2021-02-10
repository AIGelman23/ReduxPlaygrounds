
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0; 

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    // actions => action handlers

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId)
      bugs[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      });
    }
  }, 

  bugResolved: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id)
    bugs[index].resolved = true;
  }
});

export const { bugAdded, bugResolved, bugAssignedToUser } = slice.actions;
export default slice.reducer;

// Memoization 
// bugs => get unresolved bugs from the cache
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bugs.resolved)
);


export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
);

// If the list of bugs hasn't changed, it will 
// not return the list of bugs from the cache

// The benefit of Memoization is not having two 
// different array objects in memory

// The output of the bugs and projects selectors 
// will end up being the input of these two functions

// If the list of bugs and projects remain unchanged
// then this list will not be recalculated again

