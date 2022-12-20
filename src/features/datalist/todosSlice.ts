import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
    todos: [],
    status: 'idle',
    error: null,
};

export const getData = createAsyncThunk('todos/getData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data
});

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
            state.todos.push(action.payload)
        },
        cardDeleted(state, action) {
            state.todos = state.todos.filter((item: any) => { return item.id !== action.payload.id })
            console.log('d', action)
            console.log(current(state))
        },
        cardStatusChanged(state, action) {
            if (action.payload.completed) {
                action.payload = { ...action.payload, completed: false }
            }
            else {
                action.payload = { ...action.payload, completed: true }
            }
            state.todos.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder.addCase(getData.pending, (state) => {
            state.status = 'loading'
        }).addCase(getData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todos = state.todos.concat(action.payload).splice(0, 15)
        }).addCase(getData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})


export const { todoAdded, cardDeleted, cardStatusChanged } = todosSlice.actions;
export default todosSlice.reducer

export const selectAllTodos = (state: any) => state.todos.todos;
