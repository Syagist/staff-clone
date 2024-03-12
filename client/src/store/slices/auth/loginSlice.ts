import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL_LOGIN} from "@/constants/apiConstants.ts";

export const login =
    createAsyncThunk<User, UserLoginRequest>("login", async (params) => {
    const res = await axios.post(`${API_URL_LOGIN}`, {
        email: params.email,
        password: params.password
    });
    console.log(res)
    return res?.data;
});

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        user: null,
        isError: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            // @ts-ignore
            state.user = action.payload;
        })
        builder.addCase(login.rejected, (state) => {
            state.isError = true;
        })
    }
});

export default loginSlice;