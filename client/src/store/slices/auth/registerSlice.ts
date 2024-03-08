import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL_REGISTER} from "../../../constants/apiConstants.ts";

interface User {
    token: string
}

interface UserRegisterRequest {
    email: string
    password: string
}

export const register =
    createAsyncThunk<User, UserRegisterRequest>("register", async (params) => {
    const res = await axios.post(`${API_URL_REGISTER}`, {
        email: params.email,
        password: params.password
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
            // @ts-ignore
            state.user = action.payload;
        })
        builder.addCase(register.rejected, (state) => {
            state.isError = true;
        })
    }
});

export default registerSlice;