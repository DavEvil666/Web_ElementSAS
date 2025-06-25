import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import './Home.css'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call for featured products
    const fetchFeaturedProducts = () => {
      // Mock data based on your database schema
      const mockProducts = [
        {
          id: 1,
          name: 'Camiseta Puma Elite',
          description: 'Diseñada para máxima transpirabilidad y confort durante tus entrenamientos más intensos.',
          price: 478950,
          image_url: '/img/camiseta1.jpg',
          is_new: true
        },
        {
          id: 13,
          name: 'Zapatillas Nike Zoom',
          description: 'Ligeras y rápidas, diseñadas para ayudarte a romper tus marcas personales.',
          price: 250000,
          image_url: '/img/zapatillam1.jpg',
          is_new: true
        },
        {
          id: 16,
          name: 'Top Adidas',
          description: 'Máxima sujeción y transpirabilidad para tus actividades de alto impacto.',
          price: 120000,
          image_url: '/img/Top2.jpg',
          is_new: false
        },
        {
          id: 10,
          name: 'Zapatillas Nike Zoom',
          description: 'Amortiguación reactiva que te impulsa hacia adelante en cada zancada.',
          price: 299000,
          image_url: '/img/zapatilla1.jpg',
          is_new: false
        }
      ]
      
      setTimeout(() => {
        setFeaturedProducts(mockProducts)
        setLoading(false)
      }, 1000)
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Element SAS</h1>
          <p>Ropa deportiva de alta calidad para atletas como tú</p>
          <Link to="/products" className="cta-button">
            Ver Productos
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Compra por Categoría</h2>
          <div className="categories-grid">
            <Link to="/category/1" className="category-card">
              <div className="category-image">
                <img src="/img/hombre-category.jpg" alt="Ropa Deportiva Hombre" />
              </div>
              <h3>Hombre</h3>
              <p>Camisetas, pantalonetas, pantalones y zapatillas</p>
            </Link>
            
            <Link to="/category/2" className="category-card">
              <div className="category-image">
                <img src="/img/mujer-category.jpg" alt="Ropa Deportiva Mujer" />
              </div>
              <h3>Mujer</h3>
              <p>Camisetas, tops, faldas, licras y zapatillas</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <h2>Productos Destacados</h2>
          {loading ? (
            <div className="loading">Cargando productos...</div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <div className="view-all">
            <Link to="/products" className="view-all-button">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🚚</div>
              <h3>Envío Gratis</h3>
              <p>En compras superiores a $150.000</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔄</div>
              <h3>Devoluciones Fáciles</h3>
              <p>30 días para devoluciones sin preguntas</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⭐</div>
              <h3>Calidad Premium</h3>
              <p>Solo marcas reconocidas mundialmente</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Para Atletas</h3>
              <p>Diseñado para el máximo rendimiento</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
