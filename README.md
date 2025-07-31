# Certificate Generator Backend

This is the backend service for the Certificate Generator project. It provides RESTful APIs for generating, managing, and serving certificates, leveraging modular architecture for scalability and maintainability.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Testing](#testing)

## Project Structure

```
backend/
├── babel.config.json
├── coverage/
├── eslint.config.mjs
├── jest.config.mjs
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── index.mjs
    ├── apps/
    │   └── certificate/
    │       ├── controllers/
    │       │   ├── certificate.controller.mjs
    │       │   └── certificate.controller.test.mjs
    │       ├── models/
    │       │   └── cerificate.model.mjs
    │       ├── repositories/
    │       │   ├── certificate.repository.mjs
    │       │   └── certificate.repository.test.mjs
    │       ├── routes/
    │       │   └── certificate.route.mjs
    │       └── usecases/
    │           ├── cerificate.usecase.mjs
    │           └── certificate.usecase.test.mjs
    ├── infrastructures/
    │   ├── config/
    │   │   └── swagger.config.mjs
    │   └── constants/
    │       └── constants.mjs
    ├── middlewares/
    │   └── error.middleware.mjs
    ├── services/
    │   └── openai.service.mjs
    └── utils/
        └── canvas.generator.mjs
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm start
   ```

3. **Environment Variables:**
   - PORT=3300.
   - MONGO_URI=mongodb+srv://shaiknagulmeera9:*******@cluster0.5i6osa4.mongodb.net/certificate-generator?retryWrites=true&w=majority

## Scripts

- `npm start` - Start the backend server.
- `npx jest` - Run tests using Jest.
- `npm run lint` - Run ESLint for code quality checks.

## API Documentation

### Generate Certificates

**POST** `/api/certificates`

#### Request Body

```json
{
  "categoryName": "Web Development"
}
```
- `categoryName` (string, required): The category for which to generate certificates (e.g., "Web Development", "Data Science").

#### Success Response

```json
{
  "success": true,
  "message": "Certificates generated successfully",
  "data": [
    {
      "id": "65a4c1e2f1b2c3d4e5f6a7b8",
      "categoryName": "Web Development",
      "title": "Certificate of Excellence",
      "description": "Awarded for outstanding achievement in Web Development.",
      "background": "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop",
      "design": "Modern Gradient",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
    // ...more certificates
  ],
  "count": 5
}
```

#### Error Response (400 Bad Request)

```json
{
  "message": "Category name is required",
  "status": 400,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

#### Error Response (500 Internal Server Error)

```json
{
  "message": "Failed to generate certificates",
  "status": 500,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Certificate Schema

```json
{
  "id": "string",
  "categoryName": "string",
  "title": "string",
  "description": "string",
  "background": "string",
  "design": "string",
  "createdAt": "string (date-time)",
  "updatedAt": "string (date-time)"
}
```

### Error Schema

```json
{
  "message": "string",
  "status": "number",
  "timestamp": "string (date-time)"
}
```

## Testing

- Tests are located alongside their respective modules (e.g., `*.test.mjs`).
- Run all tests with:
  ```bash
  npx jest
  ```



