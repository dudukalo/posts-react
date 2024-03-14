import { Link } from 'react-router-dom';

import styles from './Post.module.css';

const Post = ({post}) => {
  return (
    <article className={styles.post}>
      <h2 className={styles.title}>
        {post.title}
      </h2>
      <p className={styles.desc}>
        {post.body}
      </p>
      <Link
       to={`/post/${post.id}`}
       className={styles.link}
      >
        Смотреть
      </Link>
    </article>
  )
}
 
export default Post;