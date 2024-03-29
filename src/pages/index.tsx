import { EditOutlined } from '@mui/icons-material'
import { Button, Card, Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddPostModal from '@/pages/components/modals/AddPostModal'
import { deletePost } from '@/redux/slices/postsSlice'
import styles from '@/styles/Home.module.css'

// Осталось с темплейта
const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  const dispatch = useDispatch()
  const posts = useSelector((state: any) => state.posts)

  const handleDeletePost = (postId: any) => {
    dispatch(deletePost(postId))
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  return (
    <>
      <AddPostModal openModal={openModal} setOpenModal={setOpenModal} />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.headerWrapper}>
          <h1>Redux</h1>
        </div>
        <div className={styles.postsContainer}>
          <div className={styles.headerContainer}>
            <h2>Посты</h2>
            <Button onClick={handleOpenModal} variant="contained">
              Добавить
            </Button>
          </div>
          <div className={styles.postsWrapper}>
            {posts.length ? (
              posts.map((post: any) => {
                return (
                  <Card key={post.id} className={styles.postCard}>
                    <div className={styles.postTextContainer}>
                      <Typography
                        className={`${styles.postText} ${styles.postHeader}`}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        className={`${styles.postText} ${styles.postDescription}`}
                      >
                        {post.description}
                      </Typography>
                    </div>
                    <div className={styles.postButtonsGroup}>
                      <Button variant="outlined" disabled>
                        <EditOutlined />
                      </Button>
                      <Button
                        variant="outlined"
                        className={styles.postDeleteButton}
                        onClick={() => handleDeletePost(post.id)}
                      >
                        Удалить
                      </Button>
                    </div>
                  </Card>
                )
              })
            ) : (
              <Typography>Нет данных</Typography>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
