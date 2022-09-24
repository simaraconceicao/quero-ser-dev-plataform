import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'phosphor-react'
import styles from './menu.module.css'

export function Menu() {
  const [open, setOpen] = useState(false)

  function handleMenu() {
    open ? setOpen(false) :  setOpen(true)
  }

  return(
    <nav>
      <List size={32} onClick={handleMenu} className={styles.hamburguer} />
      <ul className={open ? styles.hamburguerOpen : styles.menu}>
        <li className={open ? styles.itemOpen : styles.item}>
          <a className={open ? styles.linkOpen : styles.link} href="/">Início</a>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/event">React para iniciantes</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link  className={open ? styles.linkOpen : styles.link} to="/about">Blog</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/comentarios">Podcast</Link>
        </li>
        <li className={open ? styles.itemOpen : styles.item}>
          <Link className={open ? styles.linkOpen : styles.link} to="/contato">Canal</Link>
        </li>
      </ul>
    </nav>
  )
}