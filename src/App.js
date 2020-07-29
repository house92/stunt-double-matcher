import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Deck from './components/Deck';
import userSlice from './slices/user';
import { saveState, loadState } from './services/LocalStorageService';
import users from './data/users.json';
import deckSlice from './slices/deck';

const loadedState = loadState();

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    deck: deckSlice.reducer,
  }),
  // Hack to have user logged in
  preloadedState: Object.keys(loadedState).length ? loadedState : { user: users[0] },
});

store.subscribe(() => saveState(store.getState()));

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
};

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={styles.container}>
        <Deck />
      </div>
    </Provider>
  );
}

export default App;
