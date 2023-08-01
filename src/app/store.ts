import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import { productReducer } from '../slices/Product'
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
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['product', 'counter']
}
const rootReducer = combineReducers({
  product: productReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default persistStore(store)
