import styles from '../styles/Button.module.css'

const Button = ({ text, contained }) => {
  return (
    <button className={contained ? styles.btnContained : styles.btnOutlined}>
      { text }
    </button>
  )
}

export default Button
