import styles from './Emergency.module.css';

export default function Emergency() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.urgentBadge}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>emergency</span>
                EMERGENCIAS 24/7
              </span>
              <h1 className={styles.heroHeadline}>
                Estoy aquí para los{' '}
                <em className={styles.heroAccent}>momentos difíciles</em>
              </h1>
              <p className={styles.heroSub}>
                Respirá. Mantené la calma. Estoy disponible las 24 horas para cuidar a tu mascota con manos expertas y corazón. Siempre estoy aquí.
              </p>
              <div className={styles.heroCtas}>
                <a href="tel:+595986368385" className={`pill-btn pill-btn-primary ${styles.callBtn}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  0986 368 385
                </a>
                <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className={styles.heroMedia}>
              <img
                alt="Veterinaria compasiva"
                className={`${styles.heroImg} gummy-shadow`}
                src="/images/ale-graduacion.png"
              />
              <div className={styles.heroImgBadge}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--error)', fontSize: '1.5rem' }}>favorite</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Siempre disponible</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--on-surface-variant)' }}>Respondo en minutos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className={styles.stepsSection}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsTitle}>¿Qué hacer en una emergencia?</h2>
            <div className={styles.stepsTitleBar} />
          </div>
          <div className={styles.stepsGrid}>
            <div className={`${styles.stepCard} card`} style={{ background: 'var(--surface-container-low)' }}>
              <div className={styles.stepIconWrap} style={{ background: 'var(--primary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)', fontSize: '2rem' }}>shield</span>
              </div>
              <h3 className={styles.stepNum}>1.</h3>
              <h3 className={styles.stepTitle}>Mantén la calma</h3>
              <p className={styles.stepDesc}>Las mascotas lastimadas pueden reaccionar diferente. Acercate despacio y envolvela suavemente con una manta si es necesario para contenerla.</p>
            </div>

            <div className={`${styles.stepCard} ${styles.stepCardHighlight} card`}>
              <div className={styles.stepIconWrap} style={{ background: 'linear-gradient(135deg, #9c3853, #7a2940)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: '#fff', fontSize: '2rem' }}>chat</span>
              </div>
              <h3 className={styles.stepNum} style={{ color: 'var(--primary)' }}>2.</h3>
              <h3 className={styles.stepTitle} style={{ color: 'var(--primary)' }}>Contactame al instante</h3>
              <p className={styles.stepDesc}>Escribime por WhatsApp o llamame. Te guío mientras me traslado a tu hogar para que puedas actuar de inmediato.</p>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-primary" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WhatsApp
              </a>
            </div>

            <div className={`${styles.stepCard} card`} style={{ background: 'var(--surface-container-low)' }}>
              <div className={styles.stepIconWrap} style={{ background: 'var(--secondary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)', fontSize: '2rem' }}>home</span>
              </div>
              <h3 className={styles.stepNum}>3.</h3>
              <h3 className={styles.stepTitle}>Yo voy a tu hogar</h3>
              <p className={styles.stepDesc}>No necesitás moverte. Voy a tu domicilio para atender a tu mascota directamente. Mantené a tu mascota cómoda y tranquila mientras llego.</p>
            </div>
          </div>
        </section>

        {/* Warning signs */}
        <section className={styles.signsSection}>
          <div className={styles.signsInner}>
            <h2 className={styles.signsTitle}>Señales de alarma que requieren atención urgente</h2>
            <div className={styles.signsGrid}>
              {[
                { icon: 'air', label: 'Dificultad para respirar', desc: 'Respiración agitada, boca abierta en gatos, encías de color azulado' },
                { icon: 'crisis_alert', label: 'Convulsiones o desmayo', desc: 'Pérdida de consciencia, temblores incontrolables, incapacidad de mantenerse en pie' },
                { icon: 'bloodtype', label: 'Sangrado severo', desc: 'Heridas que no dejan de sangrar o sospecha de hemorragia interna' },
                { icon: 'sick', label: 'Vómitos repetidos', desc: 'Vómitos frecuentes o arcadas, especialmente con el abdomen hinchado' },
                { icon: 'thermostat', label: 'Temperatura extrema', desc: 'Síntomas de golpe de calor o exposición prolongada al frío' },
                { icon: 'warning', label: 'Posible envenenamiento', desc: 'Ingestión de tóxicos, medicamentos o plantas venenosas' },
              ].map(sign => (
                <div key={sign.label} className={`${styles.signCard} card`}>
                  <div className={styles.signIcon}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--error)', fontSize: '1.5rem' }}>{sign.icon}</span>
                  </div>
                  <div>
                    <div className={styles.signLabel}>{sign.label}</div>
                    <div className={styles.signDesc}>{sign.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className={styles.locationSection} id="map">
          <div className={styles.locationInner}>
            <div className={styles.locationDetails}>
              <h2 className={styles.locationTitle}>¿Dónde atiendo?</h2>
              <div className={styles.locationItems}>
                <div className={styles.locationItem}>
                  <div className={styles.locationIconWrap} style={{ background: 'var(--primary-container)' }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)' }}>location_on</span>
                  </div>
                  <div>
                    <p className={styles.locationStreet}>Asunción, Paraguay</p>
                    <p className={styles.locationCity}>Atención en tu domicilio</p>
                  </div>
                </div>

                <div className={styles.locationItem}>
                  <div className={styles.locationIconWrap} style={{ background: 'var(--secondary-container)' }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>schedule</span>
                  </div>
                  <div>
                    <p className={styles.locationStreet}>Horario de emergencias</p>
                    <p className={styles.locationCity}>24 horas / 7 días a la semana</p>
                  </div>
                </div>

                <div className={styles.locationItem}>
                  <div className={styles.locationIconWrap} style={{ background: 'var(--tertiary-container)' }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>call</span>
                  </div>
                  <div>
                    <p className={styles.locationStreet}>Línea de emergencias</p>
                    <p className={styles.locationCity}>0986 368 385</p>
                  </div>
                </div>
              </div>

              <blockquote className={styles.testimonial}>
                <p>"Lo mejor para los momentos más difíciles. Fue increíblemente gentil con mi perrita. Estamos eternamente agradecidos."</p>
                <footer>— Valentina R. &amp; Canela</footer>
              </blockquote>
            </div>

            <div className={styles.mapWrap}>
              <img
                alt="Mapa de Asunción"
                className={styles.mapImg}
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop"
              />
              <div className={styles.mapPin}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: '#fff', fontSize: '1.5rem' }}>pets</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
