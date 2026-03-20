import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
              VETERINARIA A DOMICILIO
            </div>
            <h1 className={styles.heroHeadline}>
              Tu mascota merece<br />
              <span className={styles.heroAccent}>el mejor cuidado</span>
            </h1>
            <p className={styles.heroSub}>
              Atención veterinaria personalizada en la comodidad de tu hogar. Sin filas, sin estrés — voy a donde estás vos y tu mascota, en Asunción y alrededores.
            </p>
            <div className={styles.heroCtas}>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Escribime por WhatsApp
              </a>
              <Link to="/emergency" className="pill-btn pill-btn-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>emergency</span>
                Emergencias
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Mascotas atendidas</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>8 años</span>
                <span className={styles.statLabel}>Experiencia</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>24/7</span>
                <span className={styles.statLabel}>Emergencias</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.heroBlobTop} />
            <div className={styles.heroImgWrap}>
              <img
                src="/images/ale.jpg"
                alt="Dra. Alejandra Ríos"
                className={styles.heroImg}
              />
            </div>
            <div className={styles.floatingCard1}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>verified</span>
              <div>
                <div className={styles.floatTitle}>Veterinaria certificada</div>
                <div className={styles.floatSub}>Atención profesional a domicilio</div>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--secondary)' }}>star</span>
              <div>
                <div className={styles.floatTitle}>4.9 / 5 Estrellas</div>
                <div className={styles.floatSub}>+200 reseñas</div>
              </div>
            </div>
            <div className={styles.heroBlobBottom} />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className={styles.services}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Todo lo que tu mascota necesita</h2>
            <p className={styles.sectionSub}>Atención integral a domicilio, con amor y profesionalismo en cada visita.</p>
          </div>

          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceCard} ${styles.serviceCardLarge} card card-hover gummy-shadow`}>
              <div className={styles.serviceIconWrap} style={{ background: 'var(--primary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)', fontSize: '2rem' }}>health_and_safety</span>
              </div>
              <h3 className={styles.serviceTitle}>Consultas a Domicilio</h3>
              <p className={styles.serviceDesc}>Revisión completa de tu mascota en casa, con diagnóstico, recetas y seguimiento personalizado.</p>
              <ul className={styles.serviceList}>
                <li><span className={styles.dot} />Revisión general de salud</li>
                <li><span className={styles.dot} />Diagnóstico y recetas</li>
                <li><span className={styles.dot} />Control y seguimiento</li>
              </ul>
              <Link to="/services" className={`pill-btn pill-btn-primary ${styles.serviceBtn}`}>Ver más</Link>
            </div>

            <div className={`${styles.serviceCard} card card-hover`} style={{ background: 'var(--secondary-container)' }}>
              <div className={styles.serviceIconWrap} style={{ background: 'var(--secondary)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary)', fontSize: '1.75rem' }}>vaccines</span>
              </div>
              <h3 className={styles.serviceTitle}>Vacunación y Desparasitación</h3>
              <p className={styles.serviceDesc}>Planes de vacunación y antiparasitarios a domicilio, con carnet y seguimiento incluido.</p>
            </div>

            <div className={`${styles.serviceCard} card card-hover`} style={{ background: 'var(--surface-container-low)' }}>
              <div className={styles.serviceIconWrap} style={{ background: 'var(--tertiary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)', fontSize: '1.75rem' }}>surgical</span>
              </div>
              <h3 className={styles.serviceTitle}>Cirugía y Castración</h3>
              <p className={styles.serviceDesc}>Procedimientos quirúrgicos con equipamiento moderno, incluyendo castraciones y cirugías menores.</p>
            </div>

            <div className={`${styles.serviceCard} card card-hover`} style={{ background: 'var(--primary)', color: 'var(--on-primary)' }}>
              <div className={styles.serviceIconWrap} style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: '#fff', fontSize: '1.75rem' }}>emergency_home</span>
              </div>
              <h3 className={styles.serviceTitle} style={{ color: 'var(--on-primary)' }}>Emergencias 24/7</h3>
              <p className={styles.serviceDesc} style={{ color: 'rgba(255,255,255,0.8)' }}>Disponible las 24 horas para situaciones urgentes. Tu mascota no puede esperar, y yo tampoco.</p>
              <Link to="/emergency" className={`pill-btn pill-btn-outline ${styles.serviceBtn}`} style={{ marginTop: '1.5rem' }}>Emergencias</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className={styles.whyUs}>
        <div className={styles.sectionInner}>
          <div className={styles.whyGrid}>
            <div className={styles.whyMedia}>
              <img
                src="/images/ale-graduacion.png"
                alt="Dra. Alejandra Ríos"
                className={`${styles.whyImg} gummy-shadow`}
              />
              <div className={styles.whyImgCard}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '2rem' }}>favorite</span>
                <div>
                  <div className={styles.floatTitle}>Cuidado con amor</div>
                  <div className={styles.floatSub}>Atención sin estrés</div>
                </div>
              </div>
            </div>

            <div className={styles.whyText}>
              <div className={styles.badge}>¿POR QUÉ ELEGIRME?</div>
              <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Atención de confianza, en tu hogar</h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Creo que cada animal merece atención gentil y profesional sin el estrés de trasladarse a una clínica. Voy a tu domicilio para que tu mascota esté tranquila, en su ambiente, rodeada de quienes la quieren.
              </p>
              <div className={styles.featureList}>
                {[
                  { icon: 'home', label: 'Sin estrés para tu mascota', desc: 'Atención en su propio hogar, sin viajes ni salas de espera' },
                  { icon: 'schedule', label: 'Turnos el mismo día', desc: 'Porque la salud de tu mascota no puede esperar' },
                  { icon: 'person_heart', label: 'Atención personalizada', desc: 'Me dedico completamente a cada paciente y su familia' },
                ].map(f => (
                  <div key={f.label} className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>{f.icon}</span>
                    </div>
                    <div>
                      <div className={styles.featureLabel}>{f.label}</div>
                      <div className={styles.featureDesc}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-primary" style={{ marginTop: '2.5rem' }}>Escribime al WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Lo que dicen mis clientes</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {[
              { quote: "La Dra. Alejandra es increíble. Mi Labrador se pone nervioso en cualquier clínica, pero en casa estuvo tranquilo y feliz durante toda la consulta.", author: "Valentina R.", pet: "Labrador", stars: 5 },
              { quote: "A las 2 de la mañana llamé por mi gato y respondió enseguida. Profesional, calmada y muy cariñosa con él. No voy a buscar otra veterinaria.", author: "Diego M.", pet: "Gato persa", stars: 5 },
              { quote: "Excelente atención, explica todo con claridad y se nota que le apasiona lo que hace. Mi Bulldog quedó encantado con ella.", author: "Lucía P.", pet: "Bulldog francés", stars: 5 },
            ].map((t, i) => (
              <div key={i} className={`${styles.testimonialCard} card`}>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.avatarPlaceholder}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>account_circle</span>
                  </div>
                  <div>
                    <div className={styles.authorName}>{t.author}</div>
                    <div className={styles.authorPet}>{t.pet}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.sectionInner}>
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>¿Lista para darle lo mejor a tu mascota?</h2>
              <p className={styles.ctaSub}>Contactame hoy y agendamos una visita a domicilio.</p>
            </div>
            <div className={styles.ctaBtns}>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Escribir por WhatsApp
              </a>
              <a href="tel:+595986368385" className="pill-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(8px)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                0986 368 385
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
