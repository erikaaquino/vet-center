import { Link } from 'react-router-dom';
import styles from './GuideDetail.module.css';

export default function Gatos() {
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
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>cruelty_free</span>
              CONSEJOS FELINOS
            </span>
            <h1 className={styles.heroHeadline}>
              Entendé a<br />
              <span className={styles.heroAccent}>tu gato</span>
            </h1>
            <p className={styles.heroSub}>
              Los gatos no son perros pequeños. Son una especie con necesidades únicas, un lenguaje propio y una inteligencia que requiere estimulación diaria. Conocerlos es quererlos mejor.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.blobBg} />
            <img
              src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=800&auto=format&fit=crop"
              alt="Gato feliz"
              className={`${styles.heroImg} gummy-shadow`}
            />
          </div>
        </header>

        {/* Enriquecimiento */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--secondary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>category</span>
            </div>
            <h2 className={styles.sectionTitle}>Enriquecimiento y Juego</h2>
          </div>

          <p className={styles.sectionIntro}>
            Un gato aburrido es un gato con problemas de comportamiento. El enriquecimiento ambiental previene la ansiedad, la agresividad y los problemas de salud relacionados con el estrés.
          </p>

          <div className={styles.twoCol}>
            <div>
              {[
                { icon: 'sports_esports', title: 'Juego activo diario', desc: 'Mínimo 15–20 minutos de juego interactivo. Los juguetes de pluma imitan la presa natural y activan el instinto cazador. Variá los juguetes para mantener el interés.' },
                { icon: 'height', title: 'Espacio vertical', desc: 'Los gatos necesitan altura para sentirse seguros. Un árbol trepador o repisas a distintas alturas reduce el estrés y los conflictos en hogares con varios gatos.' },
                { icon: 'restaurant', title: 'Comederos interactivos', desc: 'Ocultá premios en pelotas dispensadoras, puzzles o tubos de cartón. Estimulan la mente y hacen que "cazar" su comida sea un reto diario.' },
                { icon: 'window', title: 'Percha de ventana', desc: 'Acceso a una ventana es la "televisión" del gato. Ver pájaros, insectos y movimiento exterior los mantiene activos mentalmente durante horas.' },
                { icon: 'grass', title: 'Hierba gatera y catnip', desc: 'La hierba gatera (Nepeta cataria) genera euforia temporal en el 50–70% de los gatos. La hierba de trigo facilita la digestión y el vómito de bolas de pelo.' },
                { icon: 'content_cut', title: 'Rascadores estratégicos', desc: 'Los gatos rascan para marcar territorio y estirar músculos. Ofrecé rascadores verticales Y horizontales en los lugares donde ya rascan — nunca castigues el rascado natural.' },
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
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop"
                alt="Gato jugando"
                className={`${styles.sideImg} gummy-shadow`}
              />
              <div className={styles.infoBox} style={{ marginTop: '1.5rem' }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)', fontSize: '1.25rem', flexShrink: 0 }}>lightbulb</span>
                <div>
                  <strong>Señales de aburrimiento:</strong> Sobrealimentación, agresividad, exceso de acicalamiento, vocalizaciones constantes o destrucción de muebles. Si ves estos signos, es hora de más enriquecimiento.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Caja de arena */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>clean_hands</span>
            </div>
            <h2 className={styles.sectionTitle}>Higiene de la Caja de Arena</h2>
          </div>

          <p className={styles.sectionIntro}>
            La caja de arena es uno de los motivos más comunes de problemas de comportamiento felino. La mayoría de los "errores" fuera de la caja son mensajes de que algo no está bien.
          </p>

          <div className={styles.cardGrid}>
            {[
              { icon: 'add_box', title: 'Regla de las N+1 cajas', desc: 'Un gato → dos cajas. Dos gatos → tres cajas. La fórmula es: número de gatos más una extra. En hogares de varios pisos, una caja por nivel.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'search', title: 'Tipo y ubicación', desc: 'Preferí cajas sin tapa (menos olores acumulados). Ubicación silenciosa, accesible, lejos del comedero. Nunca en lugares donde el gato pueda ser "sorprendido".', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
              { icon: 'cleaning_services', title: 'Frecuencia de limpieza', desc: 'Retirá la materia fecal 1–2 veces al día. Vaciado y lavado completo con agua y jabón neutro una vez por semana. Los gatos detectan olores humanos indetectables.', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)' },
              { icon: 'eco', title: 'Tipo de arena', desc: 'Empezá con arena aglomerante sin fragancia. Los gatos son muy sensibles a los aromas artificiales — lo que nos parece "fresco" a nosotros, a ellos les resulta irritante.', bg: 'var(--surface-container)', iconColor: 'var(--on-surface)' },
              { icon: 'rule', title: 'Profundidad adecuada', desc: 'Mínimo 5 cm de arena. Los gatos necesitan escarbar y cubrir. Una capa fina causa estrés y puede llevarlos a buscar otros lugares.', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
              { icon: 'warning', title: 'Señales de alerta', desc: 'Orinar fuera de la caja, orinar con esfuerzo, sangre en orina o heces duras pueden indicar cistitis, obstrucción urinaria o estreñimiento — consultá de inmediato.', bg: '#fde8e8', iconColor: 'var(--error)' },
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

        {/* Cuidado preventivo */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>medical_services</span>
            </div>
            <h2 className={styles.sectionTitle}>Cuidado Preventivo</h2>
          </div>

          <p className={styles.sectionIntro}>
            Los gatos son maestros en ocultar el malestar. Para cuando muestran síntomas evidentes, la enfermedad ya puede estar avanzada. La prevención es la mejor medicina.
          </p>

          <div className={styles.timeline}>
            {[
              { age: 'Cada 6 meses', title: 'Control veterinario', desc: 'Revisión completa, peso, dentición, análisis de orina y heces si hay síntomas. Los gatos adultos y seniors necesitan controles semestrales.', icon: 'medical_services' },
              { age: 'Anual', title: 'Vacunación y desparasitación', desc: 'Vacunas anuales según el estilo de vida (interior, exterior). Desparasitación interna cada 3–4 meses y externa mensual si tiene acceso al exterior.', icon: 'vaccines' },
              { age: 'Mensual', title: 'Revisión en casa', desc: 'Revisá ojos, oídos, dientes, pelaje y peso. Conocer el "normal" de tu gato te permite detectar cambios sutiles antes de que sean graves.', icon: 'search' },
              { age: 'Diario', title: 'Observación del comportamiento', desc: 'Cambios en el apetito, la sed, el uso de la caja, la energía o la interacción social son siempre señales de que algo puede estar pasando.', icon: 'visibility' },
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

          <div className={styles.infoBox} style={{ marginTop: '2rem' }}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)', fontSize: '1.25rem', flexShrink: 0 }}>home</span>
            <div>
              <strong>Ventaja del gato interior:</strong> Los gatos que viven exclusivamente en interiores tienen una esperanza de vida de 12–18 años versus 5–7 años para los que salen. El riesgo de accidentes, enfermedades infecciosas y peleas es significativamente menor.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaBlob} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Preguntas sobre el cuidado de tu gato?</h2>
            <p className={styles.ctaSub}>Agendá una consulta domiciliaria. Tu gato estará más tranquilo en su propio entorno, y podré evaluarlo con mucho más detalle.</p>
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
