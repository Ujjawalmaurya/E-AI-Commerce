# E-AI Commerce

A full-stack e-commerce application featuring a React frontend and a Node.js/Express backend with SQLite.

## Overview

This project simulates a premium e-commerce platform with features like product browsing, a functional shopping cart, and Indian pricing (INR).

## Project Structure

- **client/**: React frontend application.
- **server/**: Node.js backend API and database.

## Getting Started

To run the full application, you need to start both the client and the server.

### 1. Start the Server

```bash
cd server
npm install
node index.js
```
The server runs on `http://localhost:3100`.

### 2. Start the Client

Open a new terminal window:

```bash
cd client
npm install
npm run dev
```
The client runs on `http://localhost:5173`.

## Features

- **Frontend**: React, Vite, Responsive Design, Cart Management.
- **Backend**: Express REST API, SQLite Database.
- **Data**: Pre-seeded with premium products and INR pricing.

For more details, check the README files in the respective directories:
- [Client README](./client/README.md)
- [Server README](./server/README.md)
