import React from 'react';
import styles from './Header.module.scss';
import { json, Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user')


  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate("/register")
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Website</h1>
      <nav className={styles.nav}>
        {
          auth ? 
          <>
          <Link to="/home" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About</Link>
          <Link to="/services" className={styles.link}>Services</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
          <Link to="/register" className={styles.link} onClick={handleLogout}>Logout({JSON.parse(auth).name})</Link>
          </>
          :
          <>
          <Link to="/register" className={styles.link}>Register</Link>
          <Link to="/login" className={styles.link}>Login</Link>
          </>
        }
      </nav>
    </header>
  );
};

export default Header;
