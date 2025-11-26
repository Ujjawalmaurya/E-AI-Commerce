# E-Commerce Server

This is the backend for the E-Commerce application, built with Node.js, Express, and SQLite.

## Features

- **REST API**: Provides endpoints to fetch products.
- **SQLite Database**: Lightweight database to store product information.
- **Seeding**: Automatically seeds the database with initial product data if it's empty.
- **CORS Support**: Enabled for frontend communication.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server:

```bash
node index.js
```

The server will run on `http://localhost:3100`.

## API Endpoints

### GET /api/products

Fetches all available products.

**Response:**
```json
{
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 24999,
      "description": "...",
      "image": "...",
      "category": "..."
    },
    ...
  ]
}
```

### GET /api/products/:id

Fetches a single product by ID.

## Database

The application uses `sqlite3`. The database file `ecommerce.db` is automatically created in the `server` directory.

To reset the database (e.g., to update prices), simply delete the `ecommerce.db` file and restart the server.
