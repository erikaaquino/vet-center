import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Dra. Alejandra Ríos</div>
          <p className={styles.tagline}>
            Atención veterinaria con amor, en la comodidad de tu hogar.
          </p>
        </div>

        <div className={styles.links}>
          <Link to="/">Servicios</Link>
          <Link to="/pet-care">Cuidados</Link>
          <Link to="/emergency">Emergencias</Link>
          <a href="#">Contacto</a>
          <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        <div className={styles.copy}>
          © 2025 Dra. Alejandra Ríos — Veterinaria. Asunción, Paraguay.
        </div>
      </div>
    </footer>
  );
}
