import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsReducer';

const persistTodoConfig = {
  key: 'contactbook-items',
  version: 1,
  storage,
  whitelist: ['contacts'],
};

const persistedContactsReducer = persistReducer(
  persistTodoConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contact: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
