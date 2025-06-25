import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import './ProductList.css'

const ProductList = () => {
  const { categoryId } = useParams()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('search')
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    priceRange: '',
    sortBy: 'name'
  })

  // Mock data based on your database schema
  const mockProducts = [
    // Men's products
    { id: 1, name: 'Camiseta Puma Elite', description: 'Diseñada para máxima transpirabilidad y confort durante tus entrenamientos más intensos.', price: 478950, image_url: '/img/camiseta1.jpg', category_id: 3, is_new: true },
    { id: 2, name: 'Camiseta Adidas Fit', description: 'Corte clásico y tejido suave que te mantiene seco y cómodo en todo momento.', price: 120000, image_url: '/img/camiseta2.jpg', category_id: 3, is_new: false },
    { id: 3, name: 'Camiseta Nike Pro', description: 'Tecnología Dri-FIT que capilariza el sudor para mantenerte concentrado en tu objetivo.', price: 98500, image_url: '/img/camiseta3.jpg', category_id: 3, is_new: false },
    { id: 4, name: 'Pantaloneta Puma Elite', description: 'Ligereza y libertad de movimiento para que superes tus límites en cada carrera.', price: 78950, image_url: '/img/pantaloneta1.jpg', category_id: 4, is_new: false },
    { id: 5, name: 'Pantaloneta Adidas Fit', description: 'Diseño versátil y cómodo, ideal para el gimnasio o para un día activo.', price: 200000, image_url: '/img/pantaloneta2.jpg', category_id: 4, is_new: false },
    { id: 6, name: 'Pantaloneta Nike Pro', description: 'Tejido elástico y de soporte que se mueve contigo en cada sentadilla y salto.', price: 108500, image_url: '/img/pantaloneta3.jpg', category_id: 4, is_new: false },
    { id: 10, name: 'Zapatillas Nike Zoom', description: 'Amortiguación reactiva que te impulsa hacia adelante en cada zancada.', price: 299000, image_url: '/img/zapatilla1.jpg', category_id: 6, is_new: false },
    
    // Women's products
    { id: 13, name: 'Camiseta Puma', description: 'Un básico elegante y funcional que se adapta a cualquier rutina de ejercicio.', price: 78950, image_url: '/img/camisetam1.jpg', category_id: 7, is_new: false },
    { id: 14, name: 'Camiseta Adidas', description: 'Estilo icónico y rendimiento superior para la atleta moderna.', price: 100000, image_url: '/img/camisetam2.jpg', category_id: 7, is_new: false },
    { id: 15, name: 'Camiseta Nike Pro Girl', description: 'Diseñada para ofrecerte frescura y soporte durante los entrenamientos más exigentes.', price: 78500, image_url: '/img/camisetam3.jpg', category_id: 7, is_new: true },
    { id: 16, name: 'Top Puma', description: 'Soporte medio y un diseño llamativo para que entrenes con confianza.', price: 88950, image_url: '/img/top1.jpg', category_id: 8, is_new: false },
    { id: 17, name: 'Top Adidas', description: 'Máxima sujeción y transpirabilidad para tus actividades de alto impacto.', price: 120000, image_url: '/img/Top2.jpg', category_id: 8, is_new: false },
    { id: 25, name: 'Zapatillas Nike Zoom', description: 'Ligeras y rápidas, diseñadas para ayudarte a romper tus marcas personales.', price: 250000, image_url: '/img/zapatillam1.jpg', category_id: 11, is_new: true }
  ]

  useEffect(() => {
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      let filteredProducts = [...mockProducts]
      
      // Filter by category if categoryId is provided
      if (categoryId) {
        const catId = parseInt(categoryId)
        if (catId === 1) {
          // Men's category - show all men's subcategories (3,4,5,6)
          filteredProducts = filteredProducts.filter(p => [3,4,5,6].includes(p.category_id))
        } else if (catId === 2) {
          // Women's category - show all women's subcategories (7,8,9,10,11)
          filteredProducts = filteredProducts.filter(p => [7,8,9,10,11].includes(p.category_id))
        }
      }
      
      // Filter by search term
      if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
      
      // Apply price filter
      if (filters.priceRange) {
        filteredProducts = filteredProducts.filter(product => {
          switch (filters.priceRange) {
            case 'under-100k':
              return product.price < 100000
            case '100k-200k':
              return product.price >= 100000 && product.price < 200000
            case '200k-300k':
              return product.price >= 200000 && product.price < 300000
            case 'over-300k':
              return product.price >= 300000
            default:
              return true
          }
        })
      }
      
      // Apply sorting
      filteredProducts.sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-low':
            return a.price - b.price
          case 'price-high':
            return b.price - a.price
          case 'name':
          default:
            return a.name.localeCompare(b.name)
        }
      })
      
      setProducts(filteredProducts)
      setLoading(false)
    }, 500)
  }, [categoryId, searchTerm, filters])

  const getCategoryTitle = () => {
    if (searchTerm) return `Resultados para "${searchTerm}"`
    if (categoryId === '1') return 'Ropa Deportiva para Hombre'
    if (categoryId === '2') return 'Ropa Deportiva para Mujer'
    return 'Todos los Productos'
  }

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="product-list">
      <div className="container">
        <div className="page-header">
          <h1>{getCategoryTitle()}</h1>
          <p>{products.length} productos encontrados</p>
        </div>

        <div className="content-wrapper">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <h3>Filtros</h3>
            
            <div className="filter-group">
              <h4>Precio</h4>
              <select 
                value={filters.priceRange} 
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              >
                <option value="">Todos los precios</option>
                <option value="under-100k">Menos de $100.000</option>
                <option value="100k-200k">$100.000 - $200.000</option>
                <option value="200k-300k">$200.000 - $300.000</option>
                <option value="over-300k">Más de $300.000</option>
              </select>
            </div>

            <div className="filter-group">
              <h4>Ordenar por</h4>
              <select 
                value={filters.sortBy} 
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              >
                <option value="name">Nombre</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-content">
            {loading ? (
              <div className="loading">Cargando productos...</div>
            ) : products.length === 0 ? (
              <div className="no-products">
                <h3>No se encontraron productos</h3>
                <p>Intenta ajustar los filtros o buscar con otros términos.</p>
              </div>
            ) : (
              <div className="products-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default ProductList
