import { Button, Dialog, TextField, Typography } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addPost } from '@/redux/slices/postsSlice'

import styles from './AddPostModal.module.css'

const AddPostModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean
  setOpenModal: Dispatch<SetStateAction<boolean>>
}) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title,
      description,
    }

    dispatch(addPost(newPost))

    setTitle('')
    setDescription('')

    // handleCloseModal()
  }

  return (
    <>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{ component: 'form' }}
        disableScrollLock
      >
        <div className={styles.container}>
          <Typography className={styles.formHeader}>Заполните поля</Typography>
          <TextField
            label="Название"
            variant="filled"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <TextField
            label="Описание"
            variant="filled"
            multiline
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <Button variant="contained" onClick={handleAddPost}>
            Добавить
          </Button>
          <Button variant="contained">Отмена</Button>
        </div>
      </Dialog>
    </>
  )
}

export default AddPostModal
