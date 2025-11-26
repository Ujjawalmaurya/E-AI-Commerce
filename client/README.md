# E-Commerce Client

This is the frontend for the E-Commerce application, built with React and Vite.

## Features

- **Product Listing**: Displays a grid of premium products with images, descriptions, and prices.
- **Shopping Cart**: Fully functional cart with add, remove, and quantity update features.
- **Responsive Design**: Optimized for various screen sizes.
- **Indian Pricing**: All prices are displayed in INR (₹).

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

- `src/components`: Reusable UI components (Header, ProductList).
- `src/App.jsx`: Main application component managing state (cart, products).
- `src/index.css`: Global styles and CSS variables.

## Technologies

- React
- Vite
- Axios (for API requests)
- CSS Modules / Vanilla CSS
