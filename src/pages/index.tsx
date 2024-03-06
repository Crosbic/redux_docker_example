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
                  <Card
                    key={post.id}
                    // variant="outlined"
                    className={styles.postCard}
                  >
                    <div>
                      <Typography className={styles.postText}>
                        {post.title}
                      </Typography>
                      <Typography className={styles.postText}>
                        {post.description}
                      </Typography>
                    </div>
                    <Button
                      variant="outlined"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Удалить
                    </Button>
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
