import { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import {
  fetchPosts,
  selectPosts,
  selectIsLoading,
  selectPostsCount
} from 'store/posts.js';

import styles from './PostsPage.module.css';

import Preloader from 'components/Preloader/Preloader';
import PostsList from 'components/PostsList/PostsList';
import Pagination from 'components/Pagination/Pagination';

const PostsPage = () => {
  const postsPerPage = 8;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { page } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const postsCount = useSelector(selectPostsCount);

  const offset = useMemo(() => {
    const correctPage = +page > 0 ? +page - 1 : 0;
    return (correctPage * postsPerPage) % postsCount;
  },[page, postsCount]);
  
  
  const posts = useSelector(selectPosts);
  
  const handlerNavigateClick = useCallback((pageIndex) => {
    navigate(`/posts/${pageIndex}`);
  }, []);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading === 'loading') {
    return <Preloader />
  }

  return (
    <main className={styles.page}>
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>Статьи</h1>
          <div className={styles.postsList}>
            <PostsList posts={posts.slice(offset, offset + postsPerPage)}/> 
          </div>
          <Pagination
            pagesCount={Math.ceil(postsCount / postsPerPage)}
            onNavigateClick={handlerNavigateClick}
          />
        </div>
      </section>
    </main>
  );
}
 
export default PostsPage;