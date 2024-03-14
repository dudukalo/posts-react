import { useNavigate } from "react-router-dom"

import styles from './BackBtn.module.css'

import BackIcon from 'components/BackIcon/BackIcon'

const BackBtn = ({className}) => {
  const navigate = useNavigate()
  
  return (
    <button
      className={styles.btn + ' ' + className}
      type='button'
      onClick={() => navigate(-1)}
    >
      <BackIcon />
    </button>  
  )
}
 
export default BackBtn