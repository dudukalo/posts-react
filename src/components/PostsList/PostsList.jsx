import styles from './PostsList.module.css'

import Post from 'components/Post/Post'

const PostsList = ({posts}) => {
  return (
    <ul className={styles.list} >
      {
        posts.map(post => (
            <li key={post.id}>
              <Post post={post}/>
            </li>
        ))
      }
    </ul>
  )
}
 
export default PostsList