import { Link } from 'react-router-dom';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>pets</span>
              CUIDADO CON AMOR, SIEMPRE
            </div>
            <h1 className={styles.heroHeadline}>
              Mis<br />
              <span className={styles.heroAccent}>Servicios</span>
            </h1>
            <p className={styles.heroSub}>
              Atención veterinaria completa a domicilio en Asunción. Cada visita es una experiencia positiva para tu mascota — en su hogar, sin estrés, con todo el cuidado que merece.
            </p>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.blobTopLeft} />
            <div className={`${styles.heroImgWrap} gummy-shadow`}>
              <img
                alt="Dra. Alejandra Ríos"
                src="/images/ale.jpg"
                className={styles.heroImg}
              />
            </div>
            <div className={styles.blobBottomRight} />
          </div>
        </header>

        {/* Section title */}
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Todo lo que ofrezco</h2>
          <div className={styles.titleUnderline} />
        </div>

        {/* Bento grid */}
        <div className={styles.bentoGrid}>

          {/* Large card – Consultas a Domicilio */}
          <div className={`${styles.card} ${styles.cardLarge} card card-hover`} style={{ background: 'var(--surface-container-low)' }}>
            <div className={styles.cardBgIcon}>
              <span className="material-symbols-outlined" style={{ fontSize: '7rem', color: 'rgba(0,102,102,0.07)' }}>health_and_safety</span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.iconWrap} style={{ background: 'var(--primary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)', fontSize: '1.75rem' }}>medical_services</span>
              </div>
              <h3 className={styles.cardTitle} style={{ color: 'var(--primary)' }}>Consultas a Domicilio</h3>
              <p className={styles.cardDesc}>
                Revisión completa de tu mascota en la comodidad de tu hogar. Diagnóstico, recetas y seguimiento personalizado sin necesidad de trasladarte a ningún lado.
              </p>
              <ul className={styles.checkList}>
                <li><span className={styles.checkDot} />Revisión general de salud</li>
                <li><span className={styles.checkDot} />Diagnóstico y recetas</li>
                <li><span className={styles.checkDot} />Control y seguimiento</li>
                <li><span className={styles.checkDot} />Orientación al dueño</li>
              </ul>
              <button className="pill-btn pill-btn-primary" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>Consultar</button>
            </div>
          </div>

          {/* Vacunación */}
          <div className={`${styles.card} ${styles.cardMed} card card-hover`} style={{ background: 'var(--secondary-container)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrap} style={{ background: 'var(--secondary)', marginBottom: '1.25rem' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary)', fontSize: '1.75rem' }}>vaccines</span>
              </div>
              <h3 className={styles.cardTitle} style={{ color: 'var(--on-secondary-container)' }}>Vacunación y Desparasitación</h3>
              <p className={styles.cardDesc} style={{ color: 'var(--on-secondary-container)' }}>
                Planes anuales de vacunación y antiparasitarios con carnet de vacunación incluido.
              </p>
              <div className={styles.tagRow}>
                <span className={styles.tag}>Vacunas</span>
                <span className={styles.tag}>Antiparasitarios</span>
                <span className={styles.tag}>Planes anuales</span>
                <span className={styles.tag}>Carnet</span>
              </div>
            </div>
          </div>

          {/* Cirugía */}
          <div className={`${styles.card} ${styles.cardSm} card card-hover`} style={{ background: 'var(--surface-container-low)' }}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrap} style={{ background: 'var(--tertiary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)', fontSize: '1.5rem' }}>surgical</span>
              </div>
              <h3 className={styles.cardTitle} style={{ color: 'var(--tertiary)' }}>Cirugía y Castración</h3>
              <p className={styles.cardDesc}>Procedimientos quirúrgicos con equipamiento moderno. Castraciones y cirugías menores con seguimiento postoperatorio.</p>
            </div>
          </div>

          {/* Cachorros */}
          <div className={`${styles.card} ${styles.cardSm} card card-hover`} style={{ background: 'var(--surface-container-highest)' }}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrap} style={{ background: 'var(--surface-container-low)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1.5rem' }}>pets</span>
              </div>
              <h3 className={styles.cardTitle}>Atención de Cachorros</h3>
              <p className={styles.cardDesc}>Primera consulta, vacunas iniciales y desparasitación para un comienzo sano y feliz.</p>
              <div className={styles.imgThumb}>
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&auto=format&fit=crop"
                  alt="Cachorro feliz"
                />
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div className={`${styles.card} ${styles.cardSm} card card-hover`} style={{ background: 'var(--primary)' }}>
            <div className={styles.cardBlobCircle} />
            <div className={styles.cardContent} style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: '#fff', fontSize: '2.5rem' }}>emergency_home</span>
                <h3 className={styles.cardTitle} style={{ color: '#fff', marginTop: '1rem' }}>Emergencias 24/7</h3>
                <p className={styles.cardDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Disponible las 24 horas para urgencias. Tu mascota no puede esperar.</p>
              </div>
              <Link to="/emergency" className="pill-btn pill-btn-outline" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
                Ver emergencias
              </Link>
            </div>
          </div>
        </div>

        {/* Progress / stats section */}
        <section className={styles.statsSection}>
          <div className={styles.statsSectionInner}>
            <div className={styles.statsText}>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Mis Pacientes en Números</h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '30rem' }}>
                Cada mascota atendida es una historia de confianza y cuidado. Estos números reflejan el compromiso que tengo con cada paciente y su familia.
              </p>
              <div className={styles.progressBars}>
                {[
                  { label: 'Pacientes recuperados', value: 85, unit: '85% de recuperación' },
                  { label: 'Planes de vacunación al día', value: 96, unit: '96% al día' },
                  { label: 'Consultas a domicilio', value: 72, unit: '72% primera visita' },
                ].map(bar => (
                  <div key={bar.label} className={styles.progressItem}>
                    <div className={styles.progressHeader}>
                      <span>{bar.label}</span>
                      <span>{bar.unit}</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill} style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.statsImgGrid}>
              <div className={styles.statsImgCol1}>
                <img
                  src="https://images.unsplash.com/photo-1491604612772-6853927639ef?w=400&auto=format&fit=crop"
                  alt="gatito"
                  className={`${styles.statsImg} ${styles.statsImgRotNeg} gummy-shadow`}
                />
                <div className={styles.statsChip} style={{ background: 'var(--secondary-container)', color: 'var(--on-secondary-container)', transform: 'rotate(2deg)' }}>
                  ¡Visita sin estrés para tu mascota!
                </div>
              </div>
              <div className={styles.statsImgCol2}>
                <div className={styles.statsChip} style={{ background: 'var(--primary-container)', color: 'var(--on-primary-container)', transform: 'rotate(-2deg)' }}>
                  500+ Mascotas atendidas
                </div>
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop"
                  alt="perros"
                  className={`${styles.statsImg} ${styles.statsImgRotPos} gummy-shadow`}
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
