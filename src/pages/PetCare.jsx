import { Link } from 'react-router-dom';
import styles from './PetCare.module.css';

const topics = [
  { label: 'Cachorros', to: '/cachorros' },
  { label: 'Nutrición', to: '/nutricion' },
  { label: 'Consejos felinos', to: '/gatos' },
  { label: 'Mascotas mayores', to: '/mascotas-mayores' },
];

export default function PetCare() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.badge}>¡Aprender es un premio!</span>
            <h1 className={styles.heroHeadline}>
              Guías de<br />
              <span className={styles.heroAccent}>Cuidado</span>
            </h1>
            <p className={styles.heroSub}>
              Bienvenido a nuestra biblioteca de amor. Explorá guías expertas, consejos prácticos e información de confianza para mantener a tus mascotas sanas y felices.
            </p>
            <div className={styles.topicTags}>
              {topics.map(tag => (
                <Link key={tag.label} to={tag.to} className={styles.tag}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1rem' }}>pets</span>
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.blobBg} />
            <img
              className={`${styles.heroImg} gummy-shadow`}
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&auto=format&fit=crop"
              alt="Perro feliz"
            />
          </div>
        </header>

        {/* Cachorros */}
        <section className={styles.section}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionIconWrap}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>school</span>
            </div>
            <h2 className={styles.sectionTitle}>Consejos para Cachorros</h2>
          </div>

          <div className={styles.puppyGrid}>
            <div className={`${styles.guideCardLarge} card card-hover gummy-shadow`}>
              <span className={styles.guideTag}>Lo básico</span>
              <h3 className={styles.guideTitle}>Entrenamiento básico: SIT y STAY</h3>
              <p className={styles.guideDesc}>
                ¡Los cachorros aprenden mejor cuando se divierten! Usá premios de alto valor y sesiones cortas de 5 a 10 minutos. La consistencia y el refuerzo positivo son la clave del éxito.
              </p>
              <ul className={styles.guideList}>
                {[
                  'Usá señales manuales constantes junto a las vocales',
                  'Premiá siempre de inmediato tras el comportamiento correcto',
                  'Terminá cada sesión en una nota positiva',
                  'Practicá en distintos ambientes para generalizar',
                ].map(tip => (
                  <li key={tip}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary-container)', fontSize: '1.25rem' }}>check_circle</span>
                    {tip}
                  </li>
                ))}
              </ul>
              <Link to="/cachorros" className="pill-btn pill-btn-primary" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>Leer guía completa</Link>
            </div>

            <div className={`${styles.guideCardSm} card card-hover`} style={{ background: 'var(--secondary-container)', position: 'relative', overflow: 'hidden' }}>
              <img
                className={styles.guideCardSmBg}
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&auto=format&fit=crop"
                alt="Socialización"
              />
              <div className={styles.guideCardSmContent}>
                <h3 className={styles.guideTitle} style={{ color: 'var(--on-secondary-container)' }}>Secretos de socialización</h3>
                <p className={styles.guideDesc} style={{ color: 'var(--on-secondary-container)', opacity: 0.85 }}>
                  La ventana crítica: exponé a tu cachorro a personas, sonidos y ambientes nuevos de forma segura antes de las 16 semanas.
                </p>
                <Link to="/cachorros" className="pill-btn pill-btn-outline" style={{ marginTop: '1.5rem', alignSelf: 'flex-start', color: 'var(--on-secondary-container)' }}>Leer guía</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section className={styles.section}>
          <div className={styles.sectionHeaderRow}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--secondary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>restaurant</span>
            </div>
            <h2 className={styles.sectionTitle}>Nutrición Esencial</h2>
          </div>
          <div className={styles.nutritionGrid}>
            {[
              { icon: 'eco', title: 'Dieta equilibrada', desc: 'Proteínas, grasas, carbohidratos, vitaminas y minerales — lo que tu mascota necesita en cada etapa de su vida.', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)', anchor: '#dieta' },
              { icon: 'water_drop', title: 'La hidratación importa', desc: 'Los gatos especialmente necesitan incentivos para tomar agua. Descubrí cuánta agua necesita tu mascota cada día.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)', anchor: '#hidratacion' },
              { icon: 'no_food', title: 'Alimentos a evitar', desc: 'Uvas, chocolate, cebollas, xilitol — una lista completa de alimentos tóxicos para perros y gatos.', bg: 'var(--error-container)', iconColor: 'var(--on-error-container)', anchor: '#alimentos' },
              { icon: 'monitor_weight', title: 'Control de peso', desc: 'La obesidad afecta al 60% de las mascotas. Aprendé a evaluar la condición corporal y mantener un peso saludable.', bg: 'var(--surface-container)', iconColor: 'var(--on-surface)', anchor: '#peso' },
            ].map(card => (
              <div key={card.title} className={`${styles.nutritionCard} card card-hover`}>
                <div className={styles.nutritionIcon} style={{ background: card.bg }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: card.iconColor, fontSize: '1.5rem' }}>{card.icon}</span>
                </div>
                <h3 className={styles.nutritionTitle}>{card.title}</h3>
                <p className={styles.nutritionDesc}>{card.desc}</p>
                <Link to={`/nutricion${card.anchor}`} className={styles.readMoreLink}>Leer más →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Feline Tips */}
        <section className={styles.section}>
          <div className={styles.felineSection}>
            <div className={styles.felineText}>
              <div className={styles.sectionHeaderRow}>
                <div className={styles.sectionIconWrap} style={{ background: 'var(--surface-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>cruelty_free</span>
                </div>
                <h2 className={styles.sectionTitle}>Consejos para Gatos</h2>
              </div>
              <div className={styles.felineTips}>
                {[
                  { icon: 'category', title: 'Enriquecimiento y juego', desc: 'Los gatos necesitan entre 15 y 20 minutos de juego activo por día. Los juguetes de pluma y los comederos interactivos previenen el aburrimiento y los problemas de comportamiento.' },
                  { icon: 'clean_hands', title: 'Higiene de la caja de arena', desc: 'Una caja por gato, más una extra. Limpieza diaria, higiene profunda semanal. La ubicación importa — tranquila y accesible.' },
                  { icon: 'medical_services', title: 'Visitas preventivas al veterinario', desc: 'Los exámenes anuales detectan problemas a tiempo. Los gatos ocultan muy bien el malestar — los chequeos regulares son esenciales, no opcionales.' },
                ].map(tip => (
                  <div key={tip.title} className={styles.felineTip}>
                    <div className={styles.felineTipIcon}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1.25rem' }}>{tip.icon}</span>
                    </div>
                    <div>
                      <div className={styles.felineTipTitle}>{tip.title}</div>
                      <div className={styles.felineTipDesc}>{tip.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/gatos" className="pill-btn pill-btn-primary" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cruelty_free</span>
                Ver guía completa de gatos
              </Link>
            </div>
            <div className={styles.felineMedia}>
              <img
                src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=600&auto=format&fit=crop"
                alt="Gato"
                className={`${styles.felineImg} gummy-shadow`}
              />
            </div>
          </div>
        </section>

        {/* Contact CTA — replaces newsletter */}
        <section className={styles.newsletter}>
          <div className={styles.newsletterInner}>
            <div className={styles.newsletterBlob} />
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>¿Tenés alguna consulta?</h2>
              <p className={styles.newsletterSub}>
                Escribime directamente o completá el formulario de contacto. Te respondo a la brevedad con orientación personalizada para tu mascota.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  WhatsApp
                </a>
                <Link to="/contact" className="pill-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', backdropFilter: 'blur(8px)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  Formulario de contacto
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
