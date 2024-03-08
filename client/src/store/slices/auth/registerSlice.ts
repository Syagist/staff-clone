import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

interface User {
    token: string
}

export const register = createAsyncThunk<User, void>("register", async () => {
    const res = await axios.post(`http://localhost:5500/api/user/registration`, {
        email: 'examp2le@example.com',
        password: '123123123'
    });
    console.log(res)
    return res?.data;
});

const registerSlice = createSlice({
    name: "register",
    initialState: {
        isLoading: false,
        user: null,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        builder.addCase(register.rejected, (state) => {
            state.isError = true;
        })
    }
});

export default registerSlice;