import styles from './header.module.css';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
                    onClick={toggleMenu}
>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
            
                <ul className={`${styles.navlinks} ${isMenuOpen ? styles.show : ''}`}>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>
                </ul>
            </nav>

            <div className={styles.hero}>
                <h1 className={styles.title}>Nada Boutou</h1>
                <h2 className={styles.subtitle}>Full-Stack Developer & Designer</h2>
                <a href="#projects" className={styles.buttonLink}>
                <button className={styles.button}>View Work</button>
                </a>
            </div>
        </header>
    );
}