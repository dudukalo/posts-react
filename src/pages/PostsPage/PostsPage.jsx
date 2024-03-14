import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom"

import { fetchPosts, selectPostsFragment, selectIsLoading, selectPostsCount } from 'store/posts.js'

import styles from './PostsPage.module.css'

import Preloader from 'components/Preloader/Preloader'
import PostsList from 'components/PostsList/PostsList'
import Pagination from 'components/Pagination/Pagination'

const PostsPage = () => {
  const postsPerPage = 8
  
  const dispatch = useDispatch()

  const { page } = useParams()
  const isLoading = useSelector(selectIsLoading)
  const postsCount = useSelector(selectPostsCount)

  const offset = useMemo(() => {
    const correctPage = +page > 0 ? +page - 1 : 0
    return (correctPage * postsPerPage) % postsCount
  },[page, postsCount])
  
  const posts = useSelector(state => selectPostsFragment(state, offset, offset + postsPerPage))

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (isLoading === 'loading') {
    return <Preloader />
  }

  return (
    <main className={styles.page}>
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>Статьи</h1>
          <div className={styles.postsList}>
            <PostsList posts={posts}/> 
          </div>
          <Pagination pagesCount={Math.ceil(postsCount / postsPerPage)}/>
        </div>
      </section>
    </main>
  )
}
 
export default PostsPage