import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from './components/ProductList'
import Header from './components/Header'

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3100/api/products')
                setProducts(response.data.data)
                setLoading(false)
            } catch (err) {
                console.error("Error fetching products:", err)
                setError('Failed to load products. Please try again later.')
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="app">
            <Header />
            <main className="container" style={{ padding: '2rem 1rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-color)', marginBottom: '0.5rem' }}>
                        Featured Collection
                    </h1>
                    <p style={{ color: '#64748b' }}>Curated premium items just for you.</p>
                </div>

                {loading && (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <div className="loader">Loading...</div>
                    </div>
                )}

                {error && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#ef4444' }}>
                        {error}
                    </div>
                )}

                {!loading && !error && <ProductList products={products} />}
            </main>
        </div>
    )
}

export default App
