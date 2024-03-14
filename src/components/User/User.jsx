import styles from './User.module.css'
import userIcon from 'assets/user.svg'

const User = ({ name, id }) => {
  return (
    <div className={styles.user}>
      <img
        src={userIcon}
        className={styles.icon}
        alt='Your SVG'
      />
      <div className={styles.info}>
        <strong>
          Автор
        </strong>
        <a
          href="#"
          className={styles.nameLink}
          rel="author"
        >
          {name}
        </a>
        <span className={styles.userId}>ID: {id}</span>
      </div>
    </div>
  )
}
 
export default User