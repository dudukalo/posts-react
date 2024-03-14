import { useNavigate } from "react-router-dom"

import styles from './Pagination.module.css'

const Pagination = ({pagesCount}) => {
  const navigate = useNavigate()

  const nav = [...Array(pagesCount)].map((_, i) => {
    const pageIndex = ++i
    return (
      <button
        key={pageIndex}
        onClick={()=>navigate(`/posts/${pageIndex}`)}
        className={styles.btn}
      >
        {pageIndex}
      </button>
    )
  })

  return (
    <div className={styles.pagination}>
      {nav}
    </div>
  )
}
 
export default Pagination