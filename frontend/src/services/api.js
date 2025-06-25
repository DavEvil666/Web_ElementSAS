// Mock API service for products and categories
// In a real application, this would make HTTP requests to your backend

const API_BASE_URL = 'http://localhost:3001/api' // Your backend URL

// Mock data based on your database schema
export const mockProducts = [
  // Men's products
  { id: 1, name: 'Camiseta Puma Elite', description: 'Diseñada para máxima transpirabilidad y confort durante tus entrenamientos más intensos.', price: 478950, image_url: '/img/camiseta1.jpg', category_id: 3, is_new: true },
  { id: 2, name: 'Camiseta Adidas Fit', description: 'Corte clásico y tejido suave que te mantiene seco y cómodo en todo momento.', price: 120000, image_url: '/img/camiseta2.jpg', category_id: 3, is_new: false },
  { id: 3, name: 'Camiseta Nike Pro', description: 'Tecnología Dri-FIT que capilariza el sudor para mantenerte concentrado en tu objetivo.', price: 98500, image_url: '/img/camiseta3.jpg', category_id: 3, is_new: false },
  { id: 4, name: 'Pantaloneta Puma Elite', description: 'Ligereza y libertad de movimiento para que superes tus límites en cada carrera.', price: 78950, image_url: '/img/pantaloneta1.jpg', category_id: 4, is_new: false },
  { id: 5, name: 'Pantaloneta Adidas Fit', description: 'Diseño versátil y cómodo, ideal para el gimnasio o para un día activo.', price: 200000, image_url: '/img/pantaloneta2.jpg', category_id: 4, is_new: false },
  { id: 6, name: 'Pantaloneta Nike Pro', description: 'Tejido elástico y de soporte que se mueve contigo en cada sentadilla y salto.', price: 108500, image_url: '/img/pantaloneta3.jpg', category_id: 4, is_new: false },
  { id: 7, name: 'Jogger Puma Elite', description: 'Estilo y funcionalidad se unen en este jogger perfecto para antes y después de entrenar.', price: 208950, image_url: '/img/pantalon1.jpg', category_id: 5, is_new: false },
  { id: 8, name: 'Pantalon Adidas Fit', description: 'Comodidad superior y un corte moderno para tu rutina diaria y tus entrenamientos.', price: 220000, image_url: '/img/pantalon2.jpg', category_id: 5, is_new: false },
  { id: 9, name: 'Jogger Nike Pro', description: 'Calidez y confort sin peso extra, ideal para los días más fríos.', price: 200000, image_url: '/img/pantalon3.jpg', category_id: 5, is_new: false },
  { id: 10, name: 'Zapatillas Nike Zoom', description: 'Amortiguación reactiva que te impulsa hacia adelante en cada zancada.', price: 299000, image_url: '/img/zapatilla1.jpg', category_id: 6, is_new: false },
  { id: 11, name: 'Zapatillas Adidas Ultraboost', description: 'Retorno de energía increíble y una comodidad que no creerás hasta que la pruebes.', price: 340000, image_url: '/img/zapatilla2.jpg', category_id: 6, is_new: false },
  { id: 12, name: 'Zapatillas Reebok Runner', description: 'Durabilidad y tracción para tus carreras diarias en cualquier superficie.', price: 280000, image_url: '/img/zapatilla3.jpg', category_id: 6, is_new: false },

  // Women's products
  { id: 13, name: 'Camiseta Puma', description: 'Un básico elegante y funcional que se adapta a cualquier rutina de ejercicio.', price: 78950, image_url: '/img/camisetam1.jpg', category_id: 7, is_new: false },
  { id: 14, name: 'Camiseta Adidas', description: 'Estilo icónico y rendimiento superior para la atleta moderna.', price: 100000, image_url: '/img/camisetam2.jpg', category_id: 7, is_new: false },
  { id: 15, name: 'Camiseta Nike Pro Girl', description: 'Diseñada para ofrecerte frescura y soporte durante los entrenamientos más exigentes.', price: 78500, image_url: '/img/camisetam3.jpg', category_id: 7, is_new: true },
  { id: 16, name: 'Top Puma', description: 'Soporte medio y un diseño llamativo para que entrenes con confianza.', price: 88950, image_url: '/img/top1.jpg', category_id: 8, is_new: false },
  { id: 17, name: 'Top Adidas', description: 'Máxima sujeción y transpirabilidad para tus actividades de alto impacto.', price: 120000, image_url: '/img/Top2.jpg', category_id: 8, is_new: false },
  { id: 18, name: 'Top Pro Girl', description: 'Comodidad y estilo se fusionan en este top de entrenamiento esencial.', price: 200000, image_url: '/img/Top3.jpg', category_id: 8, is_new: false },
  { id: 19, name: 'Falda Puma', description: 'Diseño deportivo y femenino con short incorporado para mayor comodidad.', price: 98950, image_url: '/img/Falda1.jpg', category_id: 9, is_new: false },
  { id: 20, name: 'Falda Adidas', description: 'Perfecta para el tenis o el pádel, combina estilo y rendimiento en la cancha.', price: 150000, image_url: '/img/Falda2.jpg', category_id: 9, is_new: false },
  { id: 21, name: 'Falda Nike Pro Girl', description: 'Tejido ligero y elástico que te permite moverte con total libertad.', price: 200000, image_url: '/img/Falda3.jpg', category_id: 9, is_new: false },
  { id: 22, name: 'Licra Puma', description: 'Ajuste ceñido y de compresión que estiliza y ofrece soporte muscular.', price: 98999, image_url: '/img/Licra1.jpg', category_id: 10, is_new: false },
  { id: 23, name: 'Licra Adidas', description: 'Cintura alta y tejido que absorbe la humedad para un confort total.', price: 150000, image_url: '/img/Licra2.jpg', category_id: 10, is_new: false },
  { id: 24, name: 'Licra Nike Pro Girl', description: 'Siente la sujeción y la confianza en cada movimiento con esta licra de alto rendimiento.', price: 250000, image_url: '/img/Licra3.jpg', category_id: 10, is_new: false },
  { id: 25, name: 'Zapatillas Nike Zoom', description: 'Ligeras y rápidas, diseñadas para ayudarte a romper tus marcas personales.', price: 250000, image_url: '/img/zapatillam1.jpg', category_id: 11, is_new: true },
  { id: 26, name: 'Zapatillas Adidas Ultraboost', description: 'La combinación perfecta de amortiguación, respuesta y estilo para tus carreras.', price: 280000, image_url: '/img/zapatillam2.jpg', category_id: 11, is_new: false },
  { id: 27, name: 'Zapatillas Reebok Runner', description: 'Una zapatilla versátil y fiable para tus entrenamientos y carreras diarias.', price: 250000, image_url: '/img/zapatilla3.jpg', category_id: 11, is_new: false }
]

export const mockCategories = [
  { id: 1, name: 'Hombre', parent_id: null },
  { id: 2, name: 'Mujer', parent_id: null },
  { id: 3, name: 'Camisetas Hombre', parent_id: 1 },
  { id: 4, name: 'Pantalonetas Hombre', parent_id: 1 },
  { id: 5, name: 'Pantalones Hombre', parent_id: 1 },
  { id: 6, name: 'Zapatillas Hombre', parent_id: 1 },
  { id: 7, name: 'Camisetas Mujer', parent_id: 2 },
  { id: 8, name: 'Tops Mujer', parent_id: 2 },
  { id: 9, name: 'Faldas Mujer', parent_id: 2 },
  { id: 10, name: 'Licras Mujer', parent_id: 2 },
  { id: 11, name: 'Zapatillas Mujer', parent_id: 2 }
]

// API functions (currently using mock data)
export const apiService = {
  // Products
  async getProducts(filters = {}) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    let products = [...mockProducts]
    
    // Apply filters
    if (filters.category_id) {
      if (filters.category_id === 1) {
        // Men's category - show all men's subcategories
        products = products.filter(p => [3, 4, 5, 6].includes(p.category_id))
      } else if (filters.category_id === 2) {
        // Women's category - show all women's subcategories
        products = products.filter(p => [7, 8, 9, 10, 11].includes(p.category_id))
      } else {
        products = products.filter(p => p.category_id === filters.category_id)
      }
    }
    
    if (filters.search) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
    if (filters.priceRange) {
      products = products.filter(product => {
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
    if (filters.sortBy) {
      products.sort((a, b) => {
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
    }
    
    return { data: products, total: products.length }
  },

  async getProduct(id) {
    await new Promise(resolve => setTimeout(resolve, 300))
    return mockProducts.find(p => p.id === parseInt(id))
  },

  async getFeaturedProducts(limit = 4) {
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockProducts.filter(p => p.is_new).slice(0, limit)
  },

  // Categories
  async getCategories() {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockCategories
  },

  async getCategory(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    return mockCategories.find(c => c.id === parseInt(id))
  },

  // Auth (mock functions)
  async login(credentials) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock successful login
    if (credentials.email && credentials.password) {
      return {
        user: {
          id: 1,
          email: credentials.email,
          full_name: 'Usuario Test'
        },
        token: 'mock-jwt-token'
      }
    }
    
    throw new Error('Invalid credentials')
  },

  async register(userData) {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock successful registration
    return {
      user: {
        id: 1,
        email: userData.email,
        full_name: userData.fullName
      },
      message: 'User registered successfully'
    }
  }
}

export default apiService
