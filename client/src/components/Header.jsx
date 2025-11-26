import React from 'react'

const Header = () => {
    return (
        <header style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #e2e8f0',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'var(--primary-color)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        E
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.025em' }}>
                        E-Commerce
                    </span>
                </div>

                <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: '500', color: '#64748b' }}>
                    <a href="#" style={{ color: 'var(--text-color)' }}>Shop</a>
                    <a href="#">Categories</a>
                    <a href="#">About</a>
                </nav>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn" style={{ color: '#64748b' }}>
                        Search
                    </button>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                        Cart (0)
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
