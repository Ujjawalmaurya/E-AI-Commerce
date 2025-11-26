import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductList from './components/ProductList'
import Header from './components/Header'

function App() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

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

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
        setIsCartOpen(true)
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId)
            return
        }
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        )
    }

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <div className="app">
            <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />

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

                {!loading && !error && <ProductList products={products} addToCart={addToCart} />}
            </main>

            {/* Cart Drawer */}
            {isCartOpen && (
                <>
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            zIndex: 1000
                        }}
                        onClick={() => setIsCartOpen(false)}
                    />
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: '400px',
                        maxWidth: '100%',
                        backgroundColor: 'white',
                        zIndex: 1001,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-4px 0 15px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
                            >
                                ×
                            </button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {cart.length === 0 ? (
                                <p style={{ color: '#64748b', textAlign: 'center', marginTop: '2rem' }}>Your cart is empty.</p>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {cart.map(item => (
                                        <div key={item.id} style={{ display: 'flex', gap: '1rem' }}>
                                            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                            <div style={{ flex: 1 }}>
                                                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{item.name}</h4>
                                                <p style={{ margin: '0 0 0.5rem 0', color: 'var(--primary-color)', fontWeight: '600' }}>
                                                    ₹{item.price.toFixed(2)}
                                                </p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        style={{ padding: '0.25rem 0.5rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white' }}
                                                    >
                                                        -
                                                    </button>
                                                    <span style={{ fontSize: '0.9rem' }}>{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        style={{ padding: '0.25rem 0.5rem', border: '1px solid #e2e8f0', borderRadius: '4px', background: 'white' }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', height: 'fit-content' }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', marginTop: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '700' }}>
                                <span>Total</span>
                                <span>₹{cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default App
