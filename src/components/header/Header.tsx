import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Website</h1>
      <nav className={styles.nav}>
        <a href="#home" className={styles.link}>Home</a>
        <a href="#about" className={styles.link}>About</a>
        <a href="#services" className={styles.link}>Services</a>
        <a href="#contact" className={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
