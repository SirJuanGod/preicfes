"use client"

import { useState } from "react"
import { Chat } from "@/components/chat"
import "./landing.css"

// Datos de localidades para generar las tarjetas
const LOCALIDADES = [
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoSanCristobalSur.png",
    alt: "Nodo San Cristóbal Sur",
    nombre: "Nodo San Cristóbal Sur",
    coordinador: "Heidy Tatiana Simbaqueva",
    descripcion: "Espacio de formación académica para jóvenes en San Cristóbal Sur.",
    direccion: "76 Sur, Cl. 25 Sur #9, Bogotá",
    maps: "https://maps.app.goo.gl/q4q2XfTdaGDuHATu6",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoFontibon.png",
    alt: "Nodo Fontibón",
    nombre: "Nodo Fontibón",
    coordinador: "Ariadna Vallecilla, Karol Lizeth Cifuentes",
    descripcion: "Espacio de formación académica para jóvenes en Fontibón.",
    direccion: "Cra. 101 #23-42, Fontibón, Bogotá",
    maps: "https://maps.app.goo.gl/WZzPZU7zcSaQw47N8",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoUsme-Ruu.png",
    alt: "Nodo Usme - Rafael Uribe Uribe",
    nombre: "Nodo Usme - Rafael Uribe Uribe",
    coordinador: "Karol Andrade",
    descripcion: "Espacio de formación académica para jóvenes en Usme y Rafael Uribe Uribe.",
    direccion: "Calle 40 #24-55, Bogotá",
    maps: "https://maps.app.goo.gl/vAKTxT7NycvEPmMh7",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoEngativa.png",
    alt: "Nodo Engativá",
    nombre: "Nodo Engativá",
    coordinador: "Andrea Catalina Garcia León",
    descripcion: "Espacio de formación académica para jóvenes en Engativá.",
    direccion: "Cl. 89 Bis #91-20, Engativá, Bogotá",
    maps: "https://maps.app.goo.gl/F39mxom1HUjUSKFT9",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoSuba.png",
    alt: "Nodo Suba",
    nombre: "Nodo Suba",
    coordinador: "Cesar Iván Hernández",
    descripcion: "Espacio de formación académica para jóvenes en Suba.",
    direccion: "Cl. 130 Bis, Bogotá",
    maps: "https://maps.app.goo.gl/YCTLR23ZrvLrYyjF7",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoUniversidadNacionalSedeBogota.jpg",
    alt: "Nodo Universidad Nacional",
    nombre: "Nodo Universidad Nacional",
    coordinador: "Gerson Pachon",
    descripcion: "Espacio de formación académica para jóvenes en Universidad Nacional.",
    direccion: "Ave Cra 30 #45-3, Bogotá",
    maps: "https://maps.app.goo.gl/WcxHdkc94fJCBWon6",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoCiudadBolivar.png",
    alt: "Nodo Ciudad Bolívar",
    nombre: "Nodo Ciudad Bolívar",
    coordinador: "Brayan Jorsey Mejía",
    descripcion: "Espacio de formación académica para jóvenes en Ciudad Bolívar.",
    direccion: "Calle 68d Bis A Sur #49F - 70",
    maps: "https://maps.app.goo.gl/pjUfLNjJrbzxu9kJA",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoKennedy.png",
    alt: "Nodo Kennedy",
    nombre: "Nodo Kennedy",
    coordinador: "José Wolf",
    descripcion: "Espacio de formación académica para jóvenes en Kennedy.",
    direccion: "Cl. 38c Sur #79-08, Kennedy, Bogotá",
    maps: "https://maps.app.goo.gl/QqAq9AZNJGVzLsqf9",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoBosaPorvenir.png",
    alt: "Nodo Bosa Porvenir",
    nombre: "Nodo Bosa Porvenir",
    coordinador: "Juan David Santos Poblador",
    descripcion: "Espacio de formación académica para jóvenes en Bosa Porvenir.",
    direccion: "Cl. 52 Sur #93d-39, Bogotá",
    maps: "https://maps.app.goo.gl/5CWpiABD5GaBTPxT9",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoUniminutoPerdomo-Soacha.png",
    alt: "Nodo Uniminuto Perdomo - Soacha",
    nombre: "Nodo Uniminuto Perdomo - Soacha",
    coordinador: "Duvan Fernando Caleño",
    descripcion: "Espacio de formación académica para jóvenes en Uniminuto Perdomo - Soacha.",
    direccion: "59 Sur98 Cra. 72",
    maps: "https://maps.app.goo.gl/PNRzKJQkK3nbXhG28",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/NodoPuenteAranda.png",
    alt: "Nodo Puente Aranda",
    nombre: "Nodo Puente Aranda",
    coordinador: "Juan Esteban Yaso",
    descripcion: "Espacio de formación académica para jóvenes en Puente Aranda.",
    direccion: "Cl. 1b #52A-02, Puente Aranda, Bogotá",
    maps: "https://maps.app.goo.gl/G7usDvx4ErHGf8CC6",
  },
  {
    img: "https://www.preicfesgratuito.com/assets/localidades/virtual.jpg",
    alt: "Nodo Virtual",
    nombre: "Nodo Virtual",
    coordinador: "Jefferson Escobar Rivas",
    descripcion: "Clases virtuales a través de Microsoft Teams.",
    direccion: null,
    maps: null,
  },
]

export default function Page() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www.preicfesgratuito.com/assets/icon/logo.png" alt="Preicfes Gratuito" className="nav-logo" />
          <div className="nav-buttons">
            <a href="/login" className="btn-login">Iniciar sesión</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScdw5BdO9yilAQvyFCqexUdwy9fVdBSsW0KD7DzzvfP7g--yw/viewform" className="btn-inscribete">Inscribete</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">Inscripciones abiertas · Bogotá D.C.</div>
            <h1>Preicfes gratuito para jóvenes</h1>
            <p className="subtitle">Creemos en el poder transformador del conocimiento.</p>
            <div className="hero-actions">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScdw5BdO9yilAQvyFCqexUdwy9fVdBSsW0KD7DzzvfP7g--yw/viewform" className="btn-primary btn-hero">
                Inscríbete ahora
              </a>
              <a href="#quienes-somos" className="btn-outline btn-hero">Conoce el programa</a>
            </div>
            <div className="hero-trust">
              <span>Sin costo</span>
              <span>Sin requisitos</span>
              <span>Profesores voluntarios</span>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-media-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.preicfesgratuito.com/assets/anuncios/Prepeople.jpg" alt="Estudiantes preparándose" />
            </div>
            <div className="hero-media-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.preicfesgratuito.com/assets/anuncios/2Pre.jpg" alt="Estudiante escribiendo" />
            </div>
            <div className="hero-chip hero-chip-score">
              <strong>+500 pts</strong>
              <span>Mejora promedio</span>
            </div>
            <div className="hero-chip hero-chip-subject">
              <strong>Lectura crítica</strong>
              <span>Módulo desbloqueado</span>
            </div>
            <div className="instagram-link">
              <a href="https://www.instagram.com/preicfesjovenesbogota/" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://www.preicfesgratuito.com/assets/instagram/Instagram_icon.png" alt="Instagram" className="instagram-logo" />
                <span>Síguenos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><strong>+4500</strong><span>Alumnos preparados</span></div>
          <div className="hero-stat"><strong>+13</strong><span>Semanas intensivas</span></div>
          <div className="hero-stat"><strong>Bogotá</strong><span>Sedes presenciales</span></div>
          <div className="hero-stat"><strong>Microsoft teams</strong><span>Clases virtuales</span></div>
        </div>
      </header>

      {/* ===== ¿QUIÉNES SOMOS? ===== */}
      <section id="quienes-somos" className="section">
        <h2>¿Quiénes somos?</h2>
        <p className="section-text">
          Somos una iniciativa social que prepara jóvenes para las pruebas Saber 11, brindando acceso gratuito a educación de calidad.
        </p>
      </section>

      {/* ===== INSTAGRAM ===== */}
      <section className="section alt instagram-section">
        <h2>Síguenos en Instagram</h2>
        <div className="instagram-grid">
          {[1, 2, 3, 4].map((n) => (
            <a key={n} href="https://www.instagram.com/preicfesjovenesbogota/" target="_blank" rel="noopener noreferrer" className="instagram-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://www.preicfesgratuito.com/assets/instagram/insta${n}.png`} alt={`Instagram post ${n}`} />
            </a>
          ))}
        </div>
      </section>

      {/* ===== #MiCausaEs ===== */}
      <section className="section alt">
        <h2 className="section-title">#MiCausaEs</h2>
        <div className="causa-cards">
          <div className="causa-card">
            <h3>Educación</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/micausaes/micausaes1.png" alt="Icono de educación" className="causa-icon" />
            <p>Creamos que la educación es la base para transformar realidades.</p>
          </div>
          <div className="causa-card">
            <h3>Equidad</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/micausaes/micausaes2.png" alt="Icono de equidad" className="causa-icon" />
            <p>Todos los jóvenes merecen las mismas oportunidades.</p>
          </div>
          <div className="causa-card">
            <h3>Compromiso social</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/micausaes/micausaes3.png" alt="Icono de compromiso social" className="causa-icon" />
            <p>Trabajamos por una Bogotá con más acceso al conocimiento.</p>
          </div>
        </div>
      </section>

      {/* ===== DIRECTIVOS ===== */}
      <section className="section alt">
        <h2>Nuestros directivos</h2>
        <p className="section-text">Conoce al equipo que lidera esta iniciativa educativa.</p>
        <a href="/directivos" className="btn-section">Ver nuestros directivos</a>
      </section>

      {/* ===== PROFESORES ===== */}
      <section className="section">
        <h2>Conviértete en uno de nuestros profesores</h2>
        <p className="section-text">Buscamos voluntarios comprometidos con la educación y el cambio social.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkT4qZ2ElWbVPHE0FEDJjlvqdPuYyYK-xzxyfPR2taw_2ZRw/viewform" className="btn-section">
          Quiero ser profesor voluntario!
        </a>
      </section>

      {/* ===== DONACIONES ===== */}
      <section className="section alt">
        <h2>Apoya a un futuro graduado</h2>
        <p className="section-text">Tu apoyo puede cambiar la vida de un joven y acercarlo a su sueño profesional.</p>
        <a href="https://tu-link-de-donaciones.com" target="_blank" rel="noopener noreferrer" className="btn-section secondary">
          Apoyar con una donación
        </a>
      </section>

      {/* ===== CERTIFICADO ===== */}
      <section className="section certificate-section">
        <div className="certificate-card">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/icon/logo.png" alt="Preicfes Logo" className="certificate-logo" />
            <h2>¿Eres estudiante?</h2>
            <p className="section-text">Descarga tu certificado y verifica tu participación en el programa.</p>
          </div>
          <button className="btn-section btn-cert-download">Descarga tu certificado</button>
        </div>
      </section>

      {/* ===== LOCALIDADES ===== */}
      <section className="section localidades-section">
        <h2>¿Dónde nos ubicamos?</h2>
        <div className="localidades-slider">
          {LOCALIDADES.map((loc) => (
            <div key={loc.nombre} className="localidad-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={loc.img} alt={loc.alt} />
              <div className="localidad-info">
                <h3>{loc.nombre}</h3>
                <p className="coordinador">
                  Coordinador: <strong>{loc.coordinador}</strong>
                </p>
                <p className="descripcion">{loc.descripcion}</p>
                {loc.direccion && (
                  <p className="direccion">
                    Dirección: {loc.direccion}{" "}
                    {loc.maps && (
                      <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="maps-link">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://www.preicfesgratuito.com/assets/maps.png" alt="Ver en Maps" />
                        <span>Ver en Maps</span>
                      </a>
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-social">
        <h2>Síguenos en nuestras redes sociales</h2>
        <p>Mantente informado sobre inscripciones, actividades, convocatorias y novedades del Preicfes Gratuito.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/preicfesjovenesbogota/" target="_blank" rel="noopener noreferrer" className="social-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/social/instagram.png" alt="Instagram" />
            <span>Instagram</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085044704018" target="_blank" rel="noopener noreferrer" className="social-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/social/facebook.png" alt="Facebook" />
            <span>Facebook</span>
          </a>
          <a href="https://www.tiktok.com/@preicfesjovenesbogota" target="_blank" rel="noopener noreferrer" className="social-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.preicfesgratuito.com/assets/social/tiktok.png" alt="TikTok" />
            <span>TikTok</span>
          </a>
        </div>
        <p className="footer-copy">© 2026 Preicfes Gratuito para Jóvenes · Bogotá D.C.</p>
      </footer>

      {/* ===== CHATBOT WIDGET ===== */}
      <button
        className={`chatbot-widget-btn ${isChatOpen ? "chatbot-widget-btn--open" : ""}`}
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-expanded={isChatOpen}
        aria-label={isChatOpen ? "Cerrar test vocacional" : "Abrir test vocacional"}
      >
        {isChatOpen ? "✖" : "💡"}
      </button>

      <div
        className={`chatbot-widget-container ${
          isChatOpen ? "" : "chatbot-widget-container--hidden"
        }`}
      >
        <Chat />
      </div>
    </>
  )
}
