import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"

import { fetchPost, selectPost, selectIsLoading } from 'store/post.js'

import styles from './PostPage.module.css'

import Preloader from 'components/Preloader/Preloader'
import BackBtn from 'components/BackBtn/BackBtn'
import User from 'components/User/User'

const PostPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { post, user } = useSelector(selectPost)
  const isLoading = useSelector(selectIsLoading)

  useEffect(() => {
    dispatch(fetchPost(id))
  }, [dispatch, id])

  if (isLoading === 'loading') {
    return <Preloader />
  }

  return (
    <main className={styles.page}>
      <section>
        <div className={styles.container}>
          <BackBtn className={styles.backBtn}/>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <p className={styles.text}>
              {post.body}
            </p>
          </div>
          <User 
            name={user.name}
            id={user.id}
          />
        </div>
      </section>
    </main>
  )
}

export default PostPage