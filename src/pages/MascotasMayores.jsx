import { Link } from 'react-router-dom';
import styles from './GuideDetail.module.css';

export default function MascotasMayores() {
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
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>elderly</span>
              MASCOTAS MAYORES
            </span>
            <h1 className={styles.heroHeadline}>
              Los años dorados<br />
              <span className={styles.heroAccent}>merecen más</span>
            </h1>
            <p className={styles.heroSub}>
              Las mascotas seniors requieren atención especial, no menos atención. Con los cuidados correctos, pueden vivir sus últimos años con salud, comodidad y mucha alegría.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.blobBg} />
            <img
              src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&auto=format&fit=crop"
              alt="Perro mayor feliz"
              className={`${styles.heroImg} gummy-shadow`}
            />
          </div>
        </header>

        {/* ¿Cuándo es senior? */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>schedule</span>
            </div>
            <h2 className={styles.sectionTitle}>¿Cuándo es una mascota "mayor"?</h2>
          </div>

          <p className={styles.sectionIntro}>
            El envejecimiento no es igual para todos. El tamaño corporal, la especie y la genética influyen mucho en cómo y cuándo envejece tu mascota.
          </p>

          <div className={styles.cardGrid}>
            {[
              { icon: 'pets', title: 'Perros pequeños (< 10 kg)', desc: 'Senior a partir de los 10–12 años. Tienen la esperanza de vida más larga de la especie canina, pudiendo llegar a 16–18 años con buenos cuidados.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'pets', title: 'Perros medianos (10–25 kg)', desc: 'Senior a partir de los 8–10 años. El riesgo de artritis, problemas cardíacos y displasia aumenta significativamente en esta etapa.', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
              { icon: 'pets', title: 'Perros grandes (> 25 kg)', desc: 'Senior ya desde los 6–7 años. Las razas grandes envejecen más rápido y tienen mayor predisposición a tumores y enfermedades musculoesqueléticas.', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)' },
              { icon: 'cruelty_free', title: 'Gatos', desc: 'Senior a partir de los 10–11 años, geronte a los 15+. Los gatos de interior bien cuidados regularmente superan los 16–18 años.', bg: 'var(--surface-container-high)', iconColor: 'var(--on-surface)' },
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

        {/* Problemas comunes */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>health_and_safety</span>
            </div>
            <h2 className={styles.sectionTitle}>Problemas de Salud Frecuentes</h2>
          </div>

          <p className={styles.sectionIntro}>
            Reconocer los signos tempranos de estas condiciones puede marcar la diferencia entre una enfermedad manejable y una crisis.
          </p>

          <div className={styles.twoCol}>
            <div>
              {[
                { icon: 'accessibility_new', title: 'Artritis y dolor articular', desc: 'El 80% de los perros mayores de 8 años tienen algún grado de artritis. Señales: dificultad para levantarse, rigidez matutina, resistencia a subir escaleras, lamerse las articulaciones.' },
                { icon: 'favorite', title: 'Enfermedad cardíaca', desc: 'Frecuente en razas pequeñas y medianas. Tos, intolerancia al ejercicio, dificultad para respirar y debilidad son señales de alerta. Control regular con auscultación.' },
                { icon: 'water_drop', title: 'Enfermedad renal (especialmente gatos)', desc: 'La enfermedad renal crónica afecta al 30% de los gatos mayores de 15 años. Señales: mayor sed y orina, pérdida de peso, vómitos, aliento con olor a amoníaco.' },
                { icon: 'psychology', title: 'Disfunción cognitiva', desc: 'Similar al Alzheimer humano. Se manifiesta como desorientación, cambios en el ciclo sueño-vigilia, vocalización nocturna, pérdida de hábitos aprendidos.' },
                { icon: 'visibility', title: 'Pérdida de visión y audición', desc: 'Normal con la edad. Las cataratas dan apariencia nublada a los ojos. La pérdida auditiva se nota en falta de respuesta a llamadas. Ambas son manejables con adaptaciones en el hogar.' },
                { icon: 'healing', title: 'Tumores y cáncer', desc: 'La incidencia aumenta con la edad. Cualquier bulto nuevo, herida que no cicatriza, pérdida de peso inexplicable o sangrado requiere evaluación urgente.' },
              ].map(t => (
                <div key={t.title} className={styles.tipRow}>
                  <div className={styles.tipIcon}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1.1rem' }}>{t.icon}</span>
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
                src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=600&auto=format&fit=crop"
                alt="Perro mayor descansando"
                className={`${styles.sideImg} gummy-shadow`}
              />
              <div className={styles.warningBox} style={{ marginTop: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1.25rem', flexShrink: 0 }}>warning</span>
                <div>
                  Los gatos son especialmente buenos ocultando el dolor. Un comportamiento más tranquilo o "más viejo" puede ser la única señal de que algo no está bien — no lo atribuyas solo a la edad.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cuidados en casa */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--secondary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>home</span>
            </div>
            <h2 className={styles.sectionTitle}>Adaptaciones en el Hogar</h2>
          </div>

          <div className={styles.cardGrid}>
            {[
              { icon: 'bed', title: 'Cama ortopédica', desc: 'Invertí en una cama con espuma de memoria. Las articulaciones doloridas necesitan soporte adecuado, especialmente en suelos duros o fríos.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'stairs', title: 'Rampas y escalones', desc: 'Para acceder al sillón, cama o al auto. Las rampas de baja inclinación son más fáciles que las escaleras para articulaciones doloridas.', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
              { icon: 'food_bank', title: 'Comederos elevados', desc: 'Reducen la presión en el cuello y las articulaciones del frente. Especialmente útil en perros con artritis cervical o problemas de esófago.', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)' },
              { icon: 'thermostat', title: 'Control de temperatura', desc: 'Las mascotas mayores regulan peor la temperatura. En invierno, campera o manta. En verano, sombra y agua fresca siempre disponible.', bg: 'var(--surface-container)', iconColor: 'var(--on-surface)' },
              { icon: 'water', title: 'Más bebederos', desc: 'Facilitá el acceso al agua. Las mascotas con dolor articular evitan moverse para beber — bebederos en varios puntos del hogar previenen la deshidratación.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'light_mode', title: 'Iluminación nocturna', desc: 'Una luz tenue en pasillos ayuda a mascotas con pérdida de visión parcial. La desorientación nocturna es más común en seniors y puede causar accidentes.', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
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

        {/* Seguimiento veterinario */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>calendar_month</span>
            </div>
            <h2 className={styles.sectionTitle}>Seguimiento Veterinario Senior</h2>
          </div>

          <div className={styles.timeline}>
            {[
              { age: 'Cada 6 meses', title: 'Control veterinario completo', desc: 'Examen físico exhaustivo, auscultación cardíaca, palpación abdominal, evaluación del peso y condición corporal, revisión dental.', icon: 'medical_services' },
              { age: 'Anual', title: 'Análisis de sangre y orina', desc: 'Hemograma completo, bioquímica hepática y renal, urinálisis. Detectan enfermedades subclínicas antes de que aparezcan síntomas.', icon: 'science' },
              { age: 'Según necesidad', title: 'Radiografías y ecografías', desc: 'Para evaluar articulaciones, órganos abdominales y tórax. Fundamentales para el diagnóstico de artritis, tumores y enfermedades cardíacas.', icon: 'radiology' },
              { age: 'Continuo', title: 'Manejo del dolor', desc: 'El dolor crónico es la principal causa de deterioro en la calidad de vida. Hay opciones farmacológicas seguras y efectivas — no lo dejés pasar.', icon: 'healing' },
            ].map(item => (
              <div key={item.age} className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ background: 'var(--tertiary-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)', fontSize: '1.25rem' }}>{item.icon}</span>
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

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaBlob} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Cuidemos juntos sus años dorados</h2>
            <p className={styles.ctaSub}>Una consulta geriátrica domiciliaria permite evaluar a tu mascota sin el estrés del traslado — especialmente importante cuando tiene movilidad reducida o dolor.</p>
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
