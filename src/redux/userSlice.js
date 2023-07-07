import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  badges: [],
  level: 0,
  xp: 0,
  avatar: '',
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLevelData: (state, action) => {
      state.badges = action.payload.badges
      state.level = action.payload.level
      state.xp = action.payload.xp
    },
    setUserInfo: (state, action) => {
        state.name = action.payload.name
        state.avatar = action.payload.avatar
    },
    setIsAuth: (state) => {
        state.isAuth = true
    }
  },
})

export const {setUserLevelData, setUserInfo, setIsAuth} = userSlice.actions

export default userSlice.reducer