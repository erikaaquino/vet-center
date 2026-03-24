import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mascota: '',
    'tipo-mascota': 'Perro',
    mensaje: '',
    'bot-field': '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const body = new URLSearchParams({
        'form-name': 'contacto',
        ...form,
      }).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.badge}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1rem' }}>pets</span>
              CONTACTO
            </span>
            <h1 className={styles.heroHeadline}>
              Hablemos sobre<br />
              <span className={styles.heroAccent}>tu mascota</span>
            </h1>
            <p className={styles.heroSub}>
              ¿Tenés preguntas o querés agendar una visita? Completá el formulario y te respondo a la brevedad, o escribime directamente por WhatsApp.
            </p>

            <div className={styles.contactMethods}>
              <a href="https://wa.me/595986368385" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--secondary-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--secondary)' }}>chat</span>
                </div>
                <div>
                  <div className={styles.contactLabel}>WhatsApp</div>
                  <div className={styles.contactValue}>0986 368 385</div>
                </div>
              </a>
              <a href="tel:+595986368385" className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--primary-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-primary-container)' }}>call</span>
                </div>
                <div>
                  <div className={styles.contactLabel}>Llamada</div>
                  <div className={styles.contactValue}>0986 368 385</div>
                </div>
              </a>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--tertiary-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--on-tertiary-container)' }}>location_on</span>
                </div>
                <div>
                  <div className={styles.contactLabel}>Zona de cobertura</div>
                  <div className={styles.contactValue}>Asunción y alrededores</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon} style={{ background: 'var(--surface-container)' }}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)' }}>schedule</span>
                </div>
                <div>
                  <div className={styles.contactLabel}>Horario</div>
                  <div className={styles.contactValue}>Lun–Sáb 8:00–20:00 · Emergencias 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '3rem' }}>check_circle</span>
                </div>
                <h2 className={styles.successTitle}>¡Mensaje enviado!</h2>
                <p className={styles.successSub}>
                  Gracias por contactarme. Te responderé a la brevedad, generalmente en menos de 2 horas.
                </p>
                <a
                  href="https://wa.me/595986368385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn-primary"
                  style={{ marginTop: '1.5rem' }}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  También podés escribirme por WhatsApp
                </a>
              </div>
            ) : (
              <form
                name="contacto"
                onSubmit={handleSubmit}
                data-netlify="true"
                netlify-honeypot="bot-field"
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="contacto" />
                <input type="hidden" name="bot-field" value={form['bot-field']} onChange={handleChange} />

                <h2 className={styles.formTitle}>Enviar consulta</h2>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="nombre">Tu nombre *</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="María García"
                      className={styles.input}
                      value={form.nombre}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Correo electrónico *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="maria@ejemplo.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="telefono">Teléfono</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="0981 000 000"
                      className={styles.input}
                      value={form.telefono}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="mascota">Nombre de tu mascota</label>
                    <input
                      id="mascota"
                      name="mascota"
                      type="text"
                      placeholder="Luna, Max, Michi..."
                      className={styles.input}
                      value={form.mascota}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="tipo-mascota">Tipo de mascota</label>
                  <select
                    id="tipo-mascota"
                    name="tipo-mascota"
                    className={styles.select}
                    value={form['tipo-mascota']}
                    onChange={handleChange}
                  >
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Conejo">Conejo</option>
                    <option value="Ave">Ave</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="mensaje">Tu consulta *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Contame qué necesitás: tipo de consulta, síntomas, fecha preferida para la visita..."
                    className={styles.textarea}
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--error)' }}>error</span>
                    Hubo un problema al enviar. Por favor escribime directamente por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="pill-btn pill-btn-primary"
                  style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_top</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                      Enviar consulta
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </header>

        {/* FAQ quick answers */}
        <section className={styles.faq}>
          <h2 className={styles.faqTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqGrid}>
            {[
              { q: '¿En qué zonas atendés?', a: 'Asunción y Gran Asunción. Para emergencias, me comunico primero para coordinar si estás en otra zona.', icon: 'location_on' },
              { q: '¿Cuánto tarda en llegar?', a: 'Consultas programadas en el horario acordado. Para emergencias, intento llegar en menos de 45 minutos.', icon: 'timer' },
              { q: '¿Traés todo el equipo?', a: 'Sí, viajo con todo el equipo necesario para consultas, vacunas y procedimientos menores.', icon: 'medical_bag' },
              { q: '¿Cómo se coordina el pago?', a: 'Efectivo o transferencia bancaria al finalizar la consulta. Te informo el precio antes de la visita.', icon: 'payments' },
              { q: '¿Atendés emergencias de noche?', a: 'Sí, estoy disponible las 24 horas para emergencias. Siempre contestá primero por WhatsApp.', icon: 'emergency' },
              { q: '¿Atendés otras mascotas además de perros y gatos?', a: 'Principalmente perros y gatos, aunque también puedo orientarte sobre otras especies pequeñas.', icon: 'pets' },
            ].map(item => (
              <div key={item.q} className={`${styles.faqCard} card`}>
                <div className={styles.faqIcon}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: 'var(--primary)', fontSize: '1.25rem' }}>{item.icon}</span>
                </div>
                <div>
                  <div className={styles.faqQ}>{item.q}</div>
                  <div className={styles.faqA}>{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
