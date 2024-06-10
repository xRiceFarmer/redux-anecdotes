import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name: 'notification',
    initialState: "hello",
    reducers: {
        setNotification(state, action){
            return action.payload
        },
        clearNotification(){
            return ""
        }
    }
})

export const {setNotification, clearNotification} = notificationSlice.actions

export const startNotification = (content, time) => {
    return async dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(clearNotification())
          }, time*1000)
    }
}

export default notificationSlice.reducer