import {configureStore} from '@reduxjs/toolkit';
import registerSlice from './slices/auth/registerSlice.ts';
import {modalReducer} from "@/store/reducers/modalReducer.ts";

const store = configureStore({
    reducer: {
        user: registerSlice.reducer,
        modal: modalReducer,
    },
});

export default store;