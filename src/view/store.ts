import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '_/view/counter/counter.store';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
