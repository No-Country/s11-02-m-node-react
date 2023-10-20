import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
     persistReducer,
     FLUSH,
     REHYDRATE,
     PAUSE,
     PERSIST,
     PURGE,
     REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './userSlice';
import authSlice from './authSlice';

const persistConfig = {
     key: 'root',
     storage,
};
const rootReducer = combineReducers({
     user: userSlice,
     auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
     reducer: persistedReducer,
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
               serializableCheck: {
                    ignoredActions: [
                         FLUSH,
                         REHYDRATE,
                         PAUSE,
                         PERSIST,
                         PURGE,
                         REGISTER,
                    ],
               },
          }),
});
