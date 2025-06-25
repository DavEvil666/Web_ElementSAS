import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img 
            src={product.image_url || '/placeholder-image.svg'} 
            alt={product.name}
            onError={(e) => {
              e.target.src = '/placeholder-image.svg'
            }}
          />
          {product.is_new && <span className="new-badge">Nuevo</span>}
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            {formatPrice(product.price)}
          </div>
        </div>
      </Link>
      
      <button className="add-to-cart-btn">
        Agregar al Carrito
      </button>
    </div>
  )
}

export default ProductCard
