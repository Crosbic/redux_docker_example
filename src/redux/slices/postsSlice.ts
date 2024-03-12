import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = [
  {
    id: 'id',
    title: 'Французские булочки',
    description: 'Съешь ещё этих мягких французских булок, да выпей чаю.',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload
      state.push({ id, title, description })
    },
    updatePost: (state, action: PayloadAction<any>) => {
      const { id, title, description } = action.payload
      const postIndex = state.findIndex((post: any) => post.id === id)
      if (postIndex !== -1) {
        state[postIndex].title = title
        state[postIndex].description = description
      }
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload

      return state.filter((post: any) => post.id !== postId)
    },
  },
})

export const { addPost, updatePost, deletePost } = postsSlice.actions
export default postsSlice.reducer
