import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Element SAS</h3>
          <p>Tu tienda deportiva de confianza</p>
        </div>
        
        <div className="footer-section">
          <h4>Categorías</h4>
          <ul>
            <li><a href="/category/1">Hombre</a></li>
            <li><a href="/category/2">Mujer</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/returns">Devoluciones</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Element SAS. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
