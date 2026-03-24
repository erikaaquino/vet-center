import { Link } from 'react-router-dom';
import styles from './GuideDetail.module.css';

export default function Cachorros() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <Link to="/pet-care" className={styles.backLink}>
              <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_back</span>
              Volver a Cuidados
            </Link>
            <span className={styles.badge}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>school</span>
              GUÍA PARA CACHORROS
            </span>
            <h1 className={styles.heroHeadline}>
              El comienzo<br />
              <span className={styles.heroAccent}>que marca todo</span>
            </h1>
            <p className={styles.heroSub}>
              Los primeros meses de vida de un cachorro son la ventana más importante para su desarrollo. Con la guía correcta, formás un perro sano, seguro y feliz para toda la vida.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.blobBg} />
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&auto=format&fit=crop"
              alt="Cachorro feliz"
              className={`${styles.heroImg} gummy-shadow`}
            />
          </div>
        </header>

        {/* Entrenamiento */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>psychology</span>
            </div>
            <h2 className={styles.sectionTitle}>Entrenamiento Básico</h2>
          </div>

          <p className={styles.sectionIntro}>
            El refuerzo positivo es la única técnica de entrenamiento que funciona a largo plazo. Nunca castigues — enseñá. Los cachorros aprenden más rápido de lo que imaginás.
          </p>

          <div className={styles.cardGrid}>
            {[
              {
                icon: 'front_hand',
                title: 'SIT (Sentarse)',
                desc: 'Sostenés un premio justo sobre la nariz del cachorro y lo movés hacia atrás sobre su cabeza. Al bajar la cola automáticamente, decís "¡Sentado!" y premiás de inmediato.',
                bg: 'var(--primary-container)',
                iconColor: 'var(--on-primary-container)',
              },
              {
                icon: 'do_not_touch',
                title: 'STAY (Quedate)',
                desc: 'Empezá pidiendo 2 segundos de espera y aumentá gradualmente. Di "¡Quedate!", retrocedé un paso y volvé antes de que se mueva. El premio llega cuando regresás, no cuando viene hacia vos.',
                bg: 'var(--secondary-container)',
                iconColor: 'var(--on-secondary-container)',
              },
              {
                icon: 'call',
                title: 'COME (Venir)',
                desc: 'Nunca llames a tu cachorro para algo desagradable (baño, recorte de uñas). Siempre debe asociar "¡Ven!" con algo positivo. La llamada es una fiesta — siempre.',
                bg: 'var(--tertiary-container)',
                iconColor: 'var(--on-tertiary-container)',
              },
              {
                icon: 'block',
                title: 'NO o DÉJALO',
                desc: 'En lugar de castigar, redirigí. Si muerde un zapato, ofrecé un juguete y premiá cuando lo tome. La palabra de interrupción funciona por asociación, no por miedo.',
                bg: 'var(--surface-container)',
                iconColor: 'var(--on-surface)',
              },
              {
                icon: 'bed',
                title: 'Lugar propio',
                desc: 'Enseñá al cachorro a ir a su cama o rincón con la orden "¡A tu lugar!". Es esencial para que tenga un espacio seguro y aprenda a calmarse solo.',
                bg: 'var(--primary-container)',
                iconColor: 'var(--on-primary-container)',
              },
              {
                icon: 'leash',
                title: 'Caminar con correa',
                desc: 'Empezá dentro de casa. El cachorro camina a tu lado — si tira, te detenés. Avanzás solo cuando la correa está floja. Consistencia sobre velocidad.',
                bg: 'var(--secondary-container)',
                iconColor: 'var(--on-secondary-container)',
              },
            ].map(c => (
              <div key={c.title} className={`${styles.infoCard} card card-hover`}>
                <div className={styles.cardIcon} style={{ background: c.bg }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: c.iconColor, fontSize: '1.25rem' }}>{c.icon}</span>
                </div>
                <div className={styles.cardTitle}>{c.title}</div>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.infoBox}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)', fontSize: '1.25rem', flexShrink: 0 }}>lightbulb</span>
            <div>
              <strong>Regla de oro:</strong> Sesiones de 5–10 minutos máximo, 3 veces al día. Los cachorros se cansan mentalmente mucho antes que físicamente. Siempre terminá en una nota positiva — pedí algo que ya sabe hacer y premiá bien.
            </div>
          </div>
        </section>

        {/* Socialización */}
        <section className={styles.section}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIconWrap} style={{ background: 'var(--secondary-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>groups</span>
                </div>
                <h2 className={styles.sectionTitle}>Socialización</h2>
              </div>
              <p className={styles.sectionIntro}>
                La ventana crítica de socialización es entre las 3 y las 16 semanas. Todo lo que encuentre durante este período va a ser "normal" para él el resto de su vida.
              </p>
              {[
                { icon: 'person', title: 'Personas diversas', desc: 'Con sombrero, gafas, barba, niños, adultos mayores, personas con bastón. Cuanta más variedad, mejor.' },
                { icon: 'volume_up', title: 'Sonidos cotidianos', desc: 'Aspiradora, lluvia, truenos (grabaciones), autos, motos, tráfico. Presentalos con calma y asociación positiva.' },
                { icon: 'home', title: 'Entornos diferentes', desc: 'Piso liso, alfombra, escaleras, exterior, autos, veterinaria. Cada textura y ambiente es una experiencia de aprendizaje.' },
                { icon: 'pets', title: 'Otros animales', desc: 'Primero solo perros vacunados y de temperamento tranquilo. Experiencias positivas crean una base sólida para la vida social.' },
              ].map(t => (
                <div key={t.title} className={styles.tipRow}>
                  <div className={styles.tipIcon} style={{ background: 'var(--secondary-container)' }}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)', fontSize: '1.1rem' }}>{t.icon}</span>
                  </div>
                  <div>
                    <div className={styles.tipTitle}>{t.title}</div>
                    <div className={styles.tipDesc}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format&fit=crop"
                alt="Cachorro socializando"
                className={`${styles.sideImg} gummy-shadow`}
              />
              <div className={styles.warningBox} style={{ marginTop: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1.25rem', flexShrink: 0 }}>warning</span>
                <div>
                  <strong>Atención:</strong> Esperá las primeras 2 vacunas antes de salir al parque o contacto con perros desconocidos. La inmunidad todavía está en formación — priorizá espacios controlados.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendario de vacunas */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>vaccines</span>
            </div>
            <h2 className={styles.sectionTitle}>Calendario de Vacunación</h2>
          </div>

          <p className={styles.sectionIntro}>
            Las vacunas protegen contra enfermedades potencialmente fatales. Seguir el calendario correcto garantiza una inmunidad completa y duradera.
          </p>

          <div className={styles.timeline}>
            {[
              { age: '6–8 semanas', title: 'Primera vacuna combinada', desc: 'Protege contra distemper (moquillo), hepatitis infecciosa y parvovirus. Primera dosis de antiparasitarios intestinales.', icon: 'vaccines' },
              { age: '10–12 semanas', title: 'Segunda vacuna combinada', desc: 'Refuerzo de la primera dosis. Se puede agregar la protección contra leptospirosis según el riesgo de exposición.', icon: 'vaccines' },
              { age: '14–16 semanas', title: 'Tercera combinada + Antirrábica', desc: 'Dosis final de la serie de cachorros. La vacuna antirrábica es obligatoria por ley y válida por 1–3 años según la marca.', icon: 'emergency' },
              { age: '6 meses', title: 'Revisión y primer refuerzo antiparasitario', desc: 'Control de crecimiento, evaluación dental, primer desparasitación externa si no se hizo antes.', icon: 'medical_services' },
              { age: '1 año', title: 'Refuerzo anual completo', desc: 'Revacunación de todas las dosis de la serie inicial. A partir de aquí, mantener el esquema anual de por vida.', icon: 'calendar_month' },
            ].map(item => (
              <div key={item.age} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1.25rem' }}>{item.icon}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineAge}>{item.age}</div>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Primera visita */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>medical_services</span>
            </div>
            <h2 className={styles.sectionTitle}>Primera Visita Veterinaria</h2>
          </div>

          <div className={styles.cardGrid}>
            {[
              { icon: 'checklist', title: 'Qué esperar', desc: 'Revisión completa: peso, temperatura, corazón, pulmones, oídos, ojos, piel y abdomen. Evaluación del desarrollo general.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'chat', title: 'Preguntas a hacer', desc: '¿Cuándo empezar a esterilizar? ¿Qué comida recomendás? ¿Cuándo puedo salir a la calle? ¿Cómo desparasitar?', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
              { icon: 'folder', title: 'Qué traer', desc: 'Historial de vacunas si las tiene, muestra de materia fecal para análisis de parásitos, y una lista de preguntas preparada.', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)' },
            ].map(c => (
              <div key={c.title} className={`${styles.infoCard} card card-hover`}>
                <div className={styles.cardIcon} style={{ background: c.bg }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: c.iconColor, fontSize: '1.25rem' }}>{c.icon}</span>
                </div>
                <div className={styles.cardTitle}>{c.title}</div>
                <p className={styles.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaBlob} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Tenés un cachorro nuevo en casa?</h2>
            <p className={styles.ctaSub}>Agendá la primera consulta domiciliaria y le damos el mejor comienzo posible. Vacunas, desparasitación y orientación completa para vos y tu familia.</p>
            <div className={styles.ctaBtns}>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                Escribir por WhatsApp
              </a>
              <Link to="/contact" className="pill-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                Consulta por formulario
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
