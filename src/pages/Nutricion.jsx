import { Link } from 'react-router-dom';
import styles from './Nutricion.module.css';

export default function Nutricion() {
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
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>restaurant</span>
              NUTRICIÓN ESENCIAL
            </span>
            <h1 className={styles.heroHeadline}>
              Alimentá bien,<br />
              <span className={styles.heroAccent}>vivir mejor</span>
            </h1>
            <p className={styles.heroSub}>
              Lo que tu mascota come cada día determina su energía, su sistema inmune y su esperanza de vida. Aquí encontrás todo lo que necesitás saber para tomar las mejores decisiones.
            </p>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.blobBg} />
            <img
              src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&auto=format&fit=crop"
              alt="Mascota saludable"
              className={`${styles.heroImg} gummy-shadow`}
            />
          </div>
        </header>

        {/* Quick cards */}
        <div className={styles.quickCards}>
          {[
            { icon: 'eco', label: 'Dieta equilibrada', anchor: '#dieta', bg: 'var(--tertiary-container)', iconColor: 'var(--on-tertiary-container)' },
            { icon: 'water_drop', label: 'Hidratación', anchor: '#hidratacion', bg: 'var(--primary-container)', iconColor: 'var(--on-primary-container)' },
            { icon: 'no_food', label: 'Alimentos tóxicos', anchor: '#alimentos', bg: 'var(--error-container)', iconColor: 'var(--on-error-container)' },
            { icon: 'monitor_weight', label: 'Control de peso', anchor: '#peso', bg: 'var(--secondary-container)', iconColor: 'var(--on-secondary-container)' },
          ].map(c => (
            <a key={c.label} href={c.anchor} className={`${styles.quickCard} card card-hover`}>
              <div className={styles.quickIcon} style={{ background: c.bg }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: c.iconColor, fontSize: '1.5rem' }}>{c.icon}</span>
              </div>
              <span className={styles.quickLabel}>{c.label}</span>
              <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '1rem', marginLeft: 'auto' }}>arrow_forward</span>
            </a>
          ))}
        </div>

        {/* Dieta equilibrada */}
        <section id="dieta" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--tertiary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>eco</span>
            </div>
            <h2 className={styles.sectionTitle}>Dieta Equilibrada</h2>
          </div>

          <p className={styles.sectionIntro}>
            Una alimentación completa y balanceada es el pilar de la salud. Los requerimientos nutricionales varían según la especie, la edad y el tamaño de tu mascota.
          </p>

          <div className={styles.twoColGrid}>
            <div className={`${styles.speciesCard} card gummy-shadow`} style={{ background: 'var(--surface-container-lowest)' }}>
              <div className={styles.speciesHeader}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '2rem' }}>pets</span>
                <h3 className={styles.speciesTitle}>Perros</h3>
              </div>
              <div className={styles.nutrientList}>
                {[
                  { label: 'Proteínas', value: '18–25%', note: 'Carne, pescado, huevo — esencial para músculo y órganos' },
                  { label: 'Grasas', value: '10–15%', note: 'Omega-3 y Omega-6 para piel, pelaje y cerebro' },
                  { label: 'Carbohidratos', value: '30–50%', note: 'Energía sostenida; priorizá granos enteros y vegetales' },
                  { label: 'Fibra', value: '2–5%', note: 'Salud digestiva y control de peso' },
                  { label: 'Agua', value: '70–80%', note: 'Del total del cuerpo; vital para todos los sistemas' },
                ].map(n => (
                  <div key={n.label} className={styles.nutrientRow}>
                    <div className={styles.nutrientTop}>
                      <span className={styles.nutrientLabel}>{n.label}</span>
                      <span className={styles.nutrientValue}>{n.value}</span>
                    </div>
                    <span className={styles.nutrientNote}>{n.note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.speciesCard} card gummy-shadow`} style={{ background: 'var(--surface-container-lowest)' }}>
              <div className={styles.speciesHeader}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--secondary)', fontSize: '2rem' }}>cruelty_free</span>
                <h3 className={styles.speciesTitle}>Gatos</h3>
              </div>
              <div className={styles.nutrientList}>
                {[
                  { label: 'Proteínas', value: '30–45%', note: 'Carnívoros obligados — la proteína animal es imprescindible' },
                  { label: 'Taurina', value: 'Esencial', note: 'Aminoácido clave — su deficiencia causa ceguera y problemas cardíacos' },
                  { label: 'Grasas', value: '15–20%', note: 'Ácido araquidónico que los gatos no producen solos' },
                  { label: 'Carbohidratos', value: '< 10%', note: 'Su metabolismo no está diseñado para digerirlos en cantidad' },
                  { label: 'Vitamina A', value: 'Preformada', note: 'No pueden convertir beta-caroteno; necesitan retinol animal' },
                ].map(n => (
                  <div key={n.label} className={styles.nutrientRow}>
                    <div className={styles.nutrientTop}>
                      <span className={styles.nutrientLabel}>{n.label}</span>
                      <span className={styles.nutrientValue}>{n.value}</span>
                    </div>
                    <span className={styles.nutrientNote}>{n.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Life stages */}
          <h3 className={styles.subTitle}>Alimentación según la etapa de vida</h3>
          <div className={styles.stageGrid}>
            {[
              { stage: 'Cachorro / Gatito', icon: 'child_care', color: 'var(--tertiary)', bg: 'var(--tertiary-container)', tips: ['Alimento específico para cachorros (mayor densidad calórica)', '3–4 comidas pequeñas al día hasta los 6 meses', '2 comidas al día desde los 6 meses', 'No restringas calorías en razas grandes — pero controlá el crecimiento'] },
              { stage: 'Adulto', icon: 'person', color: 'var(--secondary)', bg: 'var(--secondary-container)', tips: ['2 comidas diarias en horarios fijos', 'Cantidades según el peso ideal, no el peso actual', 'Variá entre alimento seco y húmedo para mantener el interés', 'Revisá el peso cada 2–3 meses'] },
              { stage: 'Senior (7+ años)', icon: 'elderly', color: 'var(--primary)', bg: 'var(--primary-container)', tips: ['Alimentos senior con menos calorías pero proteína sostenida', 'Suplementos de glucosamina para articulaciones', 'Mayor contenido de agua (alimento húmedo recomendado)', 'Revisión veterinaria cada 6 meses'] },
            ].map(s => (
              <div key={s.stage} className={`${styles.stageCard} card`} style={{ background: s.bg }}>
                <div className={styles.stageIcon}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: s.color, fontSize: '1.5rem' }}>{s.icon}</span>
                </div>
                <h4 className={styles.stageTitle} style={{ color: s.color }}>{s.stage}</h4>
                <ul className={styles.stageTips}>
                  {s.tips.map(t => (
                    <li key={t}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: s.color, fontSize: '1rem' }}>check_circle</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Hidratación */}
        <section id="hidratacion" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--primary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)' }}>water_drop</span>
            </div>
            <h2 className={styles.sectionTitle}>La Hidratación Importa</h2>
          </div>

          <p className={styles.sectionIntro}>
            El agua es el nutriente más subestimado. La deshidratación, incluso leve, afecta la función renal, digestiva y la termorregulación.
          </p>

          <div className={styles.hydrationLayout}>
            <div className={styles.hydrationStats}>
              <div className={`${styles.statBig} card`} style={{ background: 'var(--primary)', color: 'var(--on-primary)' }}>
                <div className={styles.statBigNum}>50 ml</div>
                <div className={styles.statBigLabel}>por kg de peso corporal al día (perros)</div>
              </div>
              <div className={`${styles.statBig} card`} style={{ background: 'var(--secondary)', color: 'var(--on-secondary)' }}>
                <div className={styles.statBigNum}>40 ml</div>
                <div className={styles.statBigLabel}>por kg de peso corporal al día (gatos)</div>
              </div>
            </div>

            <div className={styles.hydrationTips}>
              <h3 className={styles.subTitle} style={{ marginBottom: '1.25rem' }}>Señales de deshidratación</h3>
              {[
                { sign: 'Pliegue cutáneo', detail: 'Pellizcá suavemente la piel del cuello — si tarda en volver a la normalidad, hay deshidratación.' },
                { sign: 'Encías secas o pegajosas', detail: 'Las encías sanas son húmedas y rosadas. Si están secas o viscosas, consultá urgente.' },
                { sign: 'Orina oscura y escasa', detail: 'La orina normal es amarillo claro. Oscura o muy poco frecuente indica bajo consumo de agua.' },
                { sign: 'Letargo y ojos hundidos', detail: 'Señales de deshidratación severa — requieren atención veterinaria inmediata.' },
              ].map(s => (
                <div key={s.sign} className={styles.signRow}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--error)', fontSize: '1.25rem', flexShrink: 0, marginTop: '0.1rem' }}>warning</span>
                  <div>
                    <span className={styles.signLabel}>{s.sign}: </span>
                    <span className={styles.signDetail}>{s.detail}</span>
                  </div>
                </div>
              ))}

              <h3 className={styles.subTitle} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Cómo incentivar el consumo de agua</h3>
              {[
                'Fuentes de agua circulante (los gatos las prefieren)',
                'Múltiples bebederos en diferentes puntos de la casa',
                'Agregar alimento húmedo o caldo sin sal a la dieta',
                'Limpiar los bebederos diariamente — detectan el agua sucia',
                'En verano, añadir hielo a su agua',
              ].map(tip => (
                <div key={tip} className={styles.tipRow}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1rem', flexShrink: 0 }}>check_circle</span>
                  <span className={styles.tipText}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alimentos peligrosos */}
        <section id="alimentos" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--error-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-error-container)' }}>no_food</span>
            </div>
            <h2 className={styles.sectionTitle}>Alimentos a Evitar</h2>
          </div>

          <p className={styles.sectionIntro}>
            Algunos alimentos inofensivos para humanos son altamente tóxicos para perros y gatos. Imprimí esta lista y compártila con toda la familia.
          </p>

          <div className={styles.toxicGrid}>
            {[
              { food: 'Chocolate', risk: 'CRÍTICO', species: 'Perros y gatos', why: 'Contiene teobromina, que sus cuerpos no pueden metabolizar. Causa vómitos, convulsiones y puede ser fatal.', icon: 'cookie' },
              { food: 'Uvas y pasas', risk: 'CRÍTICO', species: 'Perros', why: 'Provoca insuficiencia renal aguda. La cantidad tóxica varía por individuo — ninguna dosis es segura.', icon: 'nutrition' },
              { food: 'Xilitol', risk: 'CRÍTICO', species: 'Perros', why: 'Edulcorante en gomas, dulces y mantequillas de maní. Causa hipoglucemia severa y daño hepático.', icon: 'candy' },
              { food: 'Cebolla y ajo', risk: 'MODERADO', species: 'Perros y gatos', why: 'Dañan los glóbulos rojos causando anemia hemolítica. Peligrosos incluso en forma de polvo o cocidos.', icon: 'set_meal' },
              { food: 'Aguacate', risk: 'MODERADO', species: 'Aves y conejos', why: 'La persina, toxina del aguacate, es especialmente dañina para aves y roedores.', icon: 'spa' },
              { food: 'Alcohol', risk: 'CRÍTICO', species: 'Todos', why: 'Incluso pequeñas cantidades causan vómitos, dificultad para respirar, convulsiones y coma.', icon: 'local_bar' },
              { food: 'Nueces de macadamia', risk: 'MODERADO', species: 'Perros', why: 'Causa debilidad muscular, fiebre, temblores y vómitos en pocas horas.', icon: 'spa' },
              { food: 'Cafeína', risk: 'MODERADO', species: 'Perros y gatos', why: 'Café, té, bebidas energéticas — aceleran el ritmo cardíaco y causan agitación y temblores.', icon: 'coffee' },
            ].map(t => (
              <div key={t.food} className={`${styles.toxicCard} card`}>
                <div className={styles.toxicTop}>
                  <div className={styles.toxicFoodName}>{t.food}</div>
                  <span className={styles.riskBadge} style={{ background: t.risk === 'CRÍTICO' ? 'var(--error)' : 'var(--tertiary)', color: t.risk === 'CRÍTICO' ? '#fff' : 'var(--on-tertiary-container)' }}>
                    {t.risk}
                  </span>
                </div>
                <div className={styles.toxicSpecies}>
                  <span className="material-symbols-outlined" style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>pets</span>
                  {t.species}
                </div>
                <p className={styles.toxicWhy}>{t.why}</p>
              </div>
            ))}
          </div>

          <div className={styles.emergencyBanner}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: '#fff', fontSize: '2rem' }}>emergency</span>
            <div>
              <div className={styles.emergencyBannerTitle}>¿Tu mascota ingirió algo tóxico?</div>
              <div className={styles.emergencyBannerSub}>No esperes síntomas. Contactame de inmediato — el tiempo es crítico en intoxicaciones.</div>
            </div>
            <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
              WhatsApp urgente
            </a>
          </div>
        </section>

        {/* Control de peso */}
        <section id="peso" className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIconWrap} style={{ background: 'var(--secondary-container)' }}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-secondary-container)' }}>monitor_weight</span>
            </div>
            <h2 className={styles.sectionTitle}>Control de Peso</h2>
          </div>

          <p className={styles.sectionIntro}>
            El 60% de los perros y gatos tienen sobrepeso en Paraguay. La obesidad es la principal enfermedad nutricional prevenible y acorta significativamente la vida de tu mascota.
          </p>

          <div className={styles.weightLayout}>
            <div>
              <h3 className={styles.subTitle}>Cómo evaluar la condición corporal</h3>
              <p className={styles.bodyText}>
                Usamos la escala Body Condition Score (BCS) del 1 al 9. El peso ideal es entre 4 y 5.
              </p>
              <div className={styles.bcsGrid}>
                {[
                  { score: '1–3', label: 'Bajo peso', desc: 'Costillas y columna visibles sin tocar. Pérdida de masa muscular evidente.', bg: 'var(--tertiary-container)', color: 'var(--tertiary)' },
                  { score: '4–5', label: 'Ideal', desc: 'Costillas palpables con capa fina. Cintura visible desde arriba. Abdomen recogido de lado.', bg: '#d4edda', color: '#155724' },
                  { score: '6–7', label: 'Sobrepeso', desc: 'Costillas difíciles de palpar. Sin cintura definida. Depósitos de grasa visibles.', bg: 'var(--tertiary-container)', color: 'var(--tertiary)' },
                  { score: '8–9', label: 'Obeso', desc: 'Costillas impalpables. Grandes depósitos de grasa. Abdomen distendido.', bg: '#fde8e8', color: 'var(--error)' },
                ].map(b => (
                  <div key={b.score} className={`${styles.bcsCard} card`} style={{ background: b.bg }}>
                    <div className={styles.bcsScore} style={{ color: b.color }}>{b.score}</div>
                    <div className={styles.bcsLabel} style={{ color: b.color }}>{b.label}</div>
                    <p className={styles.bcsDesc}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={styles.subTitle}>Consejos para un peso saludable</h3>
              <div className={styles.weightTips}>
                {[
                  { icon: 'scale', title: 'Pesá las porciones', desc: 'Usá una balanza de cocina. Una taza extra de croquetas al día puede ser el 20% del requerimiento calórico.' },
                  { icon: 'no_meals', title: 'Eliminá los premios en exceso', desc: 'Los snacks deben ser menos del 10% de las calorías diarias. Usá trozos de zanahoria o pepino como premios bajos en calorías.' },
                  { icon: 'directions_walk', title: 'Movimiento diario', desc: 'Perros: mínimo 30 minutos de caminata. Gatos: 15–20 minutos de juego activo con juguetes interactivos.' },
                  { icon: 'calendar_month', title: 'Pesada mensual', desc: 'Registrá el peso de tu mascota cada mes. Una pérdida o ganancia del 10% amerita consulta veterinaria.' },
                ].map(t => (
                  <div key={t.title} className={styles.weightTip}>
                    <div className={styles.weightTipIcon}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--secondary)', fontSize: '1.25rem' }}>{t.icon}</span>
                    </div>
                    <div>
                      <div className={styles.weightTipTitle}>{t.title}</div>
                      <div className={styles.weightTipDesc}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.weightWarning}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--tertiary)', fontSize: '1.25rem' }}>info</span>
                <p>Nunca pongas a tu mascota en dieta de golpe. Una restricción calórica brusca puede causar lipidosis hepática en gatos, una enfermedad potencialmente fatal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaBlob} />
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>¿Querés una evaluación nutricional personalizada?</h2>
              <p className={styles.ctaSub}>Agendá una consulta domiciliaria y evalúo la dieta de tu mascota según su especie, edad, peso y estado de salud.</p>
              <div className={styles.ctaBtns}>
                <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className="pill-btn pill-btn-outline">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  Consultar por WhatsApp
                </a>
                <Link to="/contact" className="pill-btn" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  Enviar formulario
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
