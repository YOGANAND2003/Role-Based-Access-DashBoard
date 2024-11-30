# Role-Based Access Control (RBAC) System

A full-stack application demonstrating Role-Based Access Control with Node.js, Express, MongoDB, and React.

## Project Structure

```
├─  Frontend/             # Frontend React application
└── Backend/            # Backend Node.js application
```

## Backend Implementation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

### Environment Variables

Create a `.env` file in the root directory:

```env
JWT_SECRET=your-super-secret-key-change-in-production
MONGODB_URI=mongodb://localhost:27017/rbac-system
PORT=3000
```

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

#### User Management
- `GET /api/users/all-users` - Get all users (Admin only)
- `PUT /api/users/change-role` - Change user role (Admin, Moderator)
- `PUT /api/users/toggle-status` - Toggle user status (Admin only)
- `GET /api/users/dashboard` - Get user dashboard (All authenticated users)

### Role Permissions

1. **Admin**
   - View all users
   - Change user roles
   - Activate/deactivate accounts
   - Access all features

2. **Moderator**
   - Change user roles (except admin)
   - View user list
   - Cannot activate/deactivate accounts

3. **User**
   - Access personal dashboard
   - View profile information

## Frontend Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

### Features

1. **Authentication**
   - User registration with role selection
   - Login with email and password
   - JWT-based authentication
   - Protected routes

2. **Admin Dashboard**
   - Complete user management
   - Role modification
   - Account status toggle
   - User statistics

3. **Moderator Dashboard**
   - User role management
   - User list view
   - Limited administrative functions

4. **User Dashboard**
   - Profile information
   - Basic dashboard features

### Technology Stack

#### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-validator for input validation

#### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- React Hot Toast for notifications
- Headless UI components

### Security Features

1. **Authentication**
   - JWT token-based authentication
   - Password hashing with bcrypt
   - Protected API endpoints

2. **Authorization**
   - Role-based access control
   - Protected routes
   - Permission-based actions

3. **Data Validation**
   - Input validation
   - Request body validation
   - Error handling

### Development

```bash
# Run backend development server
npm run dev

# Run frontend development server
cd client && npm run dev
```

### Production

```bash
# Build frontend
cd client && npm run build

# Start production server
npm start
```
---

## Frontend Implementation
---
# RBAC System Frontend

React-based frontend for the Role-Based Access Control system.

## Features

### Authentication
- User registration with role selection
- Login system
- Protected routes
- JWT token management

### Role-Based Dashboards

1. **Admin Dashboard**
   - View all users
   - Modify user roles
   - Toggle account status
   - User statistics

2. **Moderator Dashboard**
   - View users
   - Modify roles (except admin)
   - Limited administrative access

3. **User Dashboard**
   - Profile information
   - Basic dashboard features

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- Axios
- React Hot Toast
- Headless UI

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── dashboard/
│   │   ├── AdminDashboard.tsx
│   │   ├── ModeratorDashboard.tsx
│   │   └── UserDashboard.tsx
│   └── common/
│       ├── Navigation.tsx
│       └── ProtectedRoute.tsx
├── context/
│   └── AuthContext.tsx
├── services/
│   ├── api.ts
│   ├── auth.service.ts
│   └── user.service.ts
├── types/
│   └── auth.ts
└── App.tsx
```

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

The application uses Vite's proxy configuration to connect to the backend API. Update `vite.config.ts` if your backend URL changes:

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000/api'
    }
  }
});
```
---
## Components

### Authentication Components

1. **LoginForm**
   - Email/password login
   - Error handling
   - Redirect to role-based dashboard

2. **RegisterForm**
   - User registration
   - Role selection
   - Validation

### Dashboard Components

1. **AdminDashboard**
   - User management table
   - Role modification
   - Account status toggle

2. **ModeratorDashboard**
   - User management
   - Limited role modification

3. **UserDashboard**
   - Profile display
   - Basic information
---
### Common Components

1. **Navigation**
   - Dynamic navigation based on auth state
   - Role-based menu items

2. **ProtectedRoute**
   - Route protection
   - Role-based access control

## State Management

- Context API for authentication state
- JWT token management
- User role and permissions

## API Integration

- Axios for API requests
- Interceptors for token management
- Error handling

## Styling

- Tailwind CSS for styling
- Responsive design
- Custom components

## Development

```bash
# Start development server
npm run dev

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```
---
## Best Practices

1. **TypeScript**
   - Strong typing
   - Interface definitions
   - Type safety

2. **Component Structure**
   - Functional components
   - Custom hooks
   - Proper prop typing

3. **Error Handling**
   - Toast notifications
   - Error boundaries
   - Form validation

4. **Security**
   - Protected routes
   - Token management
   - Role-based access
---
## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request



