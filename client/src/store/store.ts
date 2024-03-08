import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './slices/auth/registerSlice.ts';

const store = configureStore({
    reducer: {
        user: registerSlice.reducer,
    },
});

export default store;