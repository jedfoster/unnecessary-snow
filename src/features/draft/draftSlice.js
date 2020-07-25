import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import store from '../../app/store';

async function get(url, headers) {
  const method = 'GET';
  try {
    const response = await fetch(url, { method, headers });
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
}


// // First, create the thunk
export const fetchGist = createAsyncThunk(
  'draft/fetchGist',
  async (url, thunkAPI) => {
    const draft = await get(url)
    return draft
  }
)



export const fetchUserById = createAsyncThunk(
  'draft/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await get(userId)
    return response.data
  }
)

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: 'users',
//   initialState: { entities: [], loading: 'idle' },
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: {
//     // Add reducers for additional action types here, and handle loading state as needed
//     [fetchUserById.fulfilled]: (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     }
//   }
// })

// Later, dispatch the thunk as needed in the app
//dispatch(fetchUserById(123))


export const draftSlice = createSlice({
  name: 'draft',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    loadDraft: (state, draft) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      Object.assign(state, draft);
    },

    usersLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    usersReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    }
  }
});

export const { loadDraft, usersLoading, usersReceived } = draftSlice.actions;

// https://gist.github.com/jedfoster/042cb0490b63da3ae2c8.json

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


// export const fetchGist = (url) => (dispatch) => get(url).then((draft) => dispatch(loadDraft(draft)));

// Define a thunk that dispatches those action creators
// export const fetchGist = (url) => async dispatch => {
//   // dispatch(usersLoading())
//   const draft = await get(url)
//   dispatch(loadDraft(draft))
// }

// export const fetchGist = () => async dispatch => {
//   dispatch(usersLoading())
//   const response = await get('https://gist.github.com/jedfoster/042cb0490b63da3ae2c8.json')
//   dispatch(usersReceived(response.data))
// }





// Later, dispatch the thunk as needed in the app
// dispatch(fetchGist(123))





// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => {
 return state.counter.value;
}

export const selectAll = state => state;

store.injectReducer(draftSlice.name, draftSlice.reducer);

export default draftSlice.reducer;
