import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../slice/auth';

export const store = configureStore({
	reducer: { auth: AuthSlice },
	devTools: process.env.NODE_ENV !== 'production',
});
