import React from 'react'

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                        <div style={{
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            color: '#94a3b8',
                            marginBottom: '0.5rem'
                        }}>
                            {product.category}
                        </div>
                        <h3 style={{
                            margin: '0 0 0.5rem 0',
                            fontSize: '1.125rem',
                            fontWeight: '600',
                            lineHeight: '1.4'
                        }}>
                            {product.name}
                        </h3>
                        <p style={{
                            margin: '0 0 1.5rem 0',
                            color: '#64748b',
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {product.description}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-color)' }}>
                                ₹{product.price.toFixed(2)}
                            </span>
                            <button
                                className="btn btn-primary"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductList
