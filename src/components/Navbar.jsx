import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? `${styles.navLink} ${styles.navLinkActive}`
      : styles.navLink;

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Dra. Alejandra Ríos
        </Link>

        <div className={styles.links}>
          <Link className={linkClass('/')} to="/">Servicios</Link>
          <Link className={linkClass('/pet-care')} to="/pet-care">Cuidados</Link>
          <Link className={linkClass('/emergency')} to="/emergency">Emergencias</Link>
          <Link className={linkClass('/contact')} to="/contact">Contacto</Link>
        </div>

        <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className={`pill-btn pill-btn-secondary ${styles.bookBtn}`}>
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
