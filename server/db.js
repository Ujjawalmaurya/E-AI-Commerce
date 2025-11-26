const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'ecommerce.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initDb();
    }
});

function initDb() {
    db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    image TEXT,
    category TEXT
  )`, (err) => {
        if (err) {
            console.error('Error creating table', err.message);
        } else {
            console.log('Products table ready.');
            seedProducts();
        }
    });
}

function seedProducts() {
    db.get("SELECT count(*) as count FROM products", (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }
        if (row.count === 0) {
            console.log('Seeding products...');
            const products = [
                {
                    name: 'Premium Wireless Headphones',
                    price: 24999.00,
                    description: 'High-fidelity audio with active noise cancellation.',
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
                    category: 'Electronics'
                },
                {
                    name: 'Ergonomic Office Chair',
                    price: 15999.00,
                    description: 'Comfortable chair designed for long working hours.',
                    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
                    category: 'Furniture'
                },
                {
                    name: 'Smart Watch Series 5',
                    price: 28999.00,
                    description: 'Track your fitness and stay connected.',
                    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D',
                    category: 'Electronics'
                },
                {
                    name: 'Minimalist Desk Lamp',
                    price: 3499.00,
                    description: 'Sleek design with adjustable brightness.',
                    image: 'https://images.unsplash.com/photo-1507473888900-52e1adad5420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcHxlbnwwfHwwfHx8MA%3D%3D',
                    category: 'Home Decor'
                },
                {
                    name: 'Professional Camera Kit',
                    price: 105000.00,
                    description: 'DSLR camera with two lenses and a carrying bag.',
                    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhJTIwa2l0fGVufDB8fDB8fHww',
                    category: 'Electronics'
                },
                {
                    name: 'Running Shoes',
                    price: 7499.00,
                    description: 'Lightweight and durable shoes for daily running.',
                    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
                    category: 'Footwear'
                }
            ];

            const insert = db.prepare('INSERT INTO products (name, price, description, image, category) VALUES (?, ?, ?, ?, ?)');
            products.forEach((product) => {
                insert.run(product.name, product.price, product.description, product.image, product.category);
            });
            insert.finalize();
            console.log('Seeded products.');
        }
    });
}

module.exports = db;
