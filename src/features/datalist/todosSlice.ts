import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../types";


interface TodosState {
    todos: Todo[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null,
}

const initialState: TodosState = {
    todos: [],
    status: 'idle',
    error: null,
};

const DATA_URL = 'https://jsonplaceholder.typicode.com/todos'

export const getData = createAsyncThunk<Todo[]>(
    'todos/getData', async () => {
        try {
            const response = await axios.get(DATA_URL);
            return response.data
        }
        catch (error) {
            alert(error)
        }
    });

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },
        cardDeleted(state, action: PayloadAction<Todo>) {
            state.todos = state.todos.filter((item: Todo): boolean => { return item.id !== action.payload.id })
        },
        cardStatusChanged(state, action: PayloadAction<Todo>) {
            if (action.payload.completed) {
                action.payload = { ...action.payload, completed: false }
            }
            else {
                action.payload = { ...action.payload, completed: true }
            }
            state.todos = state.todos.filter((item: Todo): boolean => { return item.id !== action.payload.id })
            state.todos.push(action.payload);
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

        })
    }
})

export const { todoAdded, cardDeleted, cardStatusChanged } = todosSlice.actions;
export default todosSlice.reducer

export const selectAllTodos = (state: { todos: TodosState }) => state.todos.todos;
